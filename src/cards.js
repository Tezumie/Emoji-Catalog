function createInfoCard(data) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    const mainContent = document.createElement("div");
    mainContent.className = "main-content";
    const mainSection = document.createElement("div");
    mainSection.className = "main-section";
    const mainImage = document.createElement("div");
    mainImage.className = "main-image";
    if (data.image) {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.name || "Main Image";
        if (data.imageAction) img.onclick = data.imageAction;
        if (data.imageTitle) img.title = data.imageTitle;
        mainImage.appendChild(img);
    } else if (data.textContent) {
        mainImage.textContent = data.textContent;
    }
    mainSection.appendChild(mainImage);
    const details = document.createElement("div");
    details.className = "details";
    if (data.name) {
        const nameElement = document.createElement("div");
        nameElement.className = "name";
        nameElement.textContent = data.name;
        details.appendChild(nameElement);
    }
    const tagsContainer = document.createElement("div");
    tagsContainer.className = "tags-container";
    if (data.category) {
        const categoryElement = document.createElement("div");
        categoryElement.className = "tag category-item";
        categoryElement.textContent = data.category.replace(/_/g, " ");
        tagsContainer.appendChild(categoryElement);
    }
    if (data.subcategory) {
        const subcategoryElement = document.createElement("div");
        subcategoryElement.className = "tag subcategory-item";
        subcategoryElement.textContent = data.subcategory.replace(/_/g, " ");
        tagsContainer.appendChild(subcategoryElement);
    }
    if (data.aliases && data.aliases.length > 0) {
        data.aliases.forEach((alias) => {
            const aliasElement = document.createElement("div");
            aliasElement.className = "tag alias-item";
            aliasElement.textContent = alias.replace(/_/g, " ");
            tagsContainer.appendChild(aliasElement);
        });
    }
    if (data.tags && data.tags.length > 0) {
        data.tags.forEach((tag) => {
            const tagElement = document.createElement("div");
            tagElement.className = "tag";
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
    }
    details.appendChild(tagsContainer);

    if (data.colorAverage) {
        // Create the main wrapper
        const colorAverageWrapper = document.createElement("div");
        colorAverageWrapper.className = "color-average-wrapper";

        // Create the color box (left side)
        const colorBox = document.createElement("div");
        colorBox.className = "color-box";
        colorBox.style.backgroundColor = data.colorAverage; // Set the background color

        // Create the info wrapper (right side)
        const colorInfo = document.createElement("div");
        colorInfo.className = "color-info";

        // Create the label
        const colorLabel = document.createElement("div");
        colorLabel.className = "color-label";
        colorLabel.textContent = "Color Average";
        colorAverageWrapper.title = "Color Average";

        // Create the RGB text
        const colorText = document.createElement("div");
        colorText.className = "color-text";
        colorText.textContent = rgbToHex(data.colorAverage); // Display the RGB string

        // Assemble the info wrapper
        // colorInfo.appendChild(colorLabel);
        colorInfo.appendChild(colorText);

        // Assemble the main wrapper
        colorAverageWrapper.appendChild(colorBox);
        colorAverageWrapper.appendChild(colorInfo);

        // Append to the details section
        tagsContainer.appendChild(colorAverageWrapper);
    }
    function rgbToHex(rgb) {
        const result = rgb.match(/^rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)$/);
        if (!result) {
            console.warn(`Invalid RGB format: ${rgb}`);
            return null;
        }
        const r = parseInt(result[1], 10);
        const g = parseInt(result[2], 10);
        const b = parseInt(result[3], 10);

        // Ensure RGB values are within the valid range
        if ([r, g, b].some(num => num < 0 || num > 255)) {
            console.warn(`RGB values out of range: ${rgb}`);
            return null;
        }

        return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0').toUpperCase()).join('');
    }
    if (data.definition) {
        const definition = document.createElement("div");
        definition.className = "definition";
        definition.textContent = data.definition;
        details.appendChild(definition);
    }
    if (data.buttons && data.buttons.length > 0) {
        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "buttons-container";
        data.buttons.forEach((buttonData) => {
            const button = document.createElement("button");
            button.className = "button";
            button.textContent = buttonData.text;
            button.title = buttonData.title;
            if (buttonData.action && typeof buttonData.action === "function") {
                button.onclick = buttonData.action;
            }
            buttonsContainer.appendChild(button);
        });
        mainSection.appendChild(buttonsContainer);
    }
    mainSection.appendChild(details);
    mainContent.appendChild(mainSection);
    cardContainer.appendChild(mainContent);
    if (data.infoSections && data.infoSections.length > 0) {
        data.infoSections.forEach((section) => {
            const infoSection = document.createElement("div");
            infoSection.className = "info-section";
            const sectionHeader = document.createElement("div");
            sectionHeader.className = "info-section-header";
            sectionHeader.textContent = section.header;
            infoSection.appendChild(sectionHeader);
            const infoCardsContainer = document.createElement("div");
            infoCardsContainer.className = "info-cards";
            section.cards.forEach((infoCard) => {
                const card = document.createElement("div");
                card.className = "info-card";
                if (infoCard.image) {
                    const cardImg = document.createElement("img");
                    cardImg.src = infoCard.image;
                    cardImg.alt = infoCard.title || "Info Image";
                    if (infoCard.imageAction) cardImg.onclick = infoCard.imageAction;
                    if (infoCard.imageTitle) cardImg.title = infoCard.imageTitle;
                    card.appendChild(cardImg);
                } else if (infoCard.textContent) {
                    const content = document.createElement("div");
                    content.className = "card-content";
                    content.classList.add(infoCard.className);
                    content.textContent = infoCard.textContent;
                    card.appendChild(content);
                }
                if (infoCard.title) {
                    const cardTitle = document.createElement("span");
                    cardTitle.textContent = infoCard.title;
                    card.appendChild(cardTitle);
                }
                if (infoCard.buttons && infoCard.buttons.length > 0) {
                    const cardButtonsContainer = document.createElement("div");
                    cardButtonsContainer.className = "info-card-buttons";
                    infoCard.buttons.forEach((button) => {
                        const btn = document.createElement("button");
                        btn.textContent = button.text;
                        if (button.action) btn.onclick = button.action;
                        cardButtonsContainer.appendChild(btn);
                    });
                    card.appendChild(cardButtonsContainer);
                }
                infoCardsContainer.appendChild(card);
            });
            infoSection.appendChild(infoCardsContainer);
            cardContainer.appendChild(infoSection);
        });
    }
    document.getElementById("cards-container").appendChild(cardContainer);
}
