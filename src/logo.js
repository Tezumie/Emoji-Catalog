const efcCardData = [
    { letter: 'e', emojis: ['🗜️', 'E', '⚓', '3️⃣', '📧'] },
    { letter: 'm', emojis: ['〽️', 'Ⓜ️', '♏'] },
    { letter: 'o', emojis: ['🔅', '🍪', '😃', '⭕', '🤪'] },
    { letter: 'j', emojis: ['🤿', '🌶️', '🎷', '🤳'] },
    { letter: 'i', emojis: ['💡', 'ℹ️', '📍', '🥄', '❗'] }
];

const efcCardContainer = document.getElementById('efc-card-container');
let twitterStyle = true;
let googleStyle = false;
function efcGetRandomEmoji(emojis) {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

efcCardData.forEach(({ letter, emojis }) => {
    const card = document.createElement('div');
    card.classList.add('efc-card');

    const content = document.createElement('div');
    content.classList.add('efc-card-content');

    const front = document.createElement('div');
    front.classList.add('efc-card-front');
    front.textContent = letter;

    const back = document.createElement('div');
    back.classList.add('efc-card-back');
    back.textContent = efcGetRandomEmoji(emojis);

    content.appendChild(front);
    content.appendChild(back);
    card.appendChild(content);

    efcCardContainer.appendChild(card);
});

function efcTriggerFlipsInOrder() {
    const cards = document.querySelectorAll('.efc-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            efcFlipCard(card);
        }, index * 100);
    });

    const totalFlipTime = cards.length * 500 + 5600;
    setTimeout(() => {
        efcTriggerFlipsInOrder();
    }, totalFlipTime);
}

function efcFlipCard(card) {
    const back = card.querySelector('.efc-card-back');
    const cardIndex = Array.from(efcCardContainer.children).indexOf(card);
    const currentLetterData = efcCardData[cardIndex];

    const newEmoji = efcGetRandomEmoji(currentLetterData.emojis);
    back.textContent = newEmoji;
    card.classList.add('flip');
    setTimeout(() => {
        card.classList.remove('flip');
    }, 3300);
    if (twitterStyle) {
        twemoji.parse(back, {
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    efcTriggerFlipsInOrder();
});