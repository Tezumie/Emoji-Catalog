const loadingWrapper = document.getElementById('loading-wrapper');
const toggleButton = document.getElementById('toggle-button');
let isLoadingVisible = true;
let rocketAnimationActive = false;
let isCreatingParticles = false; // Ensure this is set correctly during initial load
let mouseMoveListener = null;
let loadingTextInterval = null; // Interval for updating loading text

function startLoadingTextAnimation(loadingTextElement) {
    let dotCount = 0;
    loadingTextInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4; // Cycle between 0, 1, 2, and 3
        loadingTextElement.textContent = `Loading${'.'.repeat(dotCount)}`;
    }, 500); // Change the text every 500ms
}

// Dynamically Create and Add Loading Screen Elements
function createRocketLoadingScreen(hasLoadingText = false) {
    loadingWrapper.innerHTML = ''; // Clear existing content

    if (hasLoadingText) {
        // Create Loading Text
        const loadingText = document.createElement('div');
        loadingText.className = 'loading-text';
        loadingText.style.position = 'absolute';
        loadingText.style.top = '10px';
        loadingText.style.left = '10px';
        loadingText.style.fontSize = '24px';
        loadingText.style.color = 'white';
        loadingWrapper.appendChild(loadingText);

        // Start text animation
        startLoadingTextAnimation(loadingText);
    }

    // Create Rocket Container
    const rocketContainer = document.createElement('div');
    rocketContainer.classList.add('emoj-load-rocket-container');
    rocketContainer.style.position = 'absolute';
    rocketContainer.style.width = '60px';
    rocketContainer.style.height = '60px';
    rocketContainer.style.pointerEvents = 'none';
    rocketContainer.style.top = '50%';
    rocketContainer.style.left = '50%';
    rocketContainer.style.zIndex = '3';

    // Create Rocket
    const rocket = document.createElement('div');
    rocket.className = 'emoj-load-rocket';
    rocket.style.fontSize = '60px';
    rocket.style.display = 'flex';
    rocket.style.justifyContent = 'center';
    rocket.style.alignItems = 'center';
    rocket.textContent = '🚀';
    rocket.style.color = 'white';
    rocketContainer.appendChild(rocket);
    loadingWrapper.appendChild(rocketContainer);

    // Create Earth
    const earth = document.createElement('div');
    earth.className = 'emoj-load-earth';
    earth.textContent = '🌍';
    earth.style.position = 'absolute';
    earth.style.bottom = '-145%';
    earth.style.left = '50%';
    earth.style.transform = 'translateX(-50%)';
    earth.style.fontSize = '90em';
    earth.style.zIndex = '1';
    earth.style.color = 'white';

    loadingWrapper.appendChild(earth);

    // Create Space Elements (Stars and Planets)
    const spaceElements = document.createElement('div');
    spaceElements.className = 'space-elements';
    spaceElements.style.position = 'absolute';
    spaceElements.style.top = '0';
    spaceElements.style.left = '0';
    spaceElements.style.width = '100vw';
    spaceElements.style.height = '100vh';
    spaceElements.style.pointerEvents = 'none';
    spaceElements.style.zIndex = '0';

    const stars = ['✨', '🌟', '✨', '🌟','✨', '🌟', '✨', '🌟'];
    const planets = ['🪐', '🌕','🛸'];

    // Create and Add Stars
    stars.forEach((star) => {
        const starElement = document.createElement('div');
        starElement.textContent = star;
        starElement.style.position = 'absolute';
        starElement.style.fontSize = '14px';
        starElement.style.color = 'white';
        starElement.style.animation = 'float 5s infinite alternate ease-in-out';
        starElement.style.top = `${Math.random() * 80 + 10}%`;
        starElement.style.left = `${Math.random() * 90}%`;
        spaceElements.appendChild(starElement);
    });

    // Create and Add Planets
    planets.forEach((planet) => {
        const planetElement = document.createElement('div');
        planetElement.textContent = planet;
        planetElement.style.position = 'absolute';
        planetElement.style.fontSize = '40px';
        planetElement.style.color = 'white';
        planetElement.style.animation = 'float 5s infinite alternate ease-in-out';
        planetElement.style.top = `${Math.random() * 80 + 10}%`;
        planetElement.style.left = `${Math.random() * 90}%`;
        spaceElements.appendChild(planetElement);
    });

    loadingWrapper.appendChild(spaceElements);

    // Ensure flags are set for initial load
    isCreatingParticles = true;  // Set particles creation to true for initial load
    rocketAnimationActive = true;

    // Start rocket movement and particle creation
    moveRocket(rocketContainer, rocket);
}

function moveRocket(rocketContainer, rocket) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let rocketX = window.innerWidth / 2;
    let rocketY = window.innerHeight / 2;

    // Remove previous mousemove listener if it exists
    if (mouseMoveListener) {
        document.removeEventListener('mousemove', mouseMoveListener);
    }

    mouseMoveListener = (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    };

    document.addEventListener('mousemove', mouseMoveListener);

    function animate() {
        const dx = mouseX - rocketX - window.innerWidth / 2;
        const dy = mouseY - rocketY - window.innerHeight / 2;
        const angle = Math.atan2(dy, dx);
        const angleDeg = angle * (180 / Math.PI);

        const easeFactor = 0.05;
        rocketX += dx * easeFactor;
        rocketY += dy * easeFactor;

        rocketContainer.style.transform = `translate(${rocketX - 30}px, ${rocketY - 30}px)`;
        rocket.style.transform = `rotate(${angleDeg + 45}deg)`;

        if (isCreatingParticles) {
            createFireParticles(rocketX + window.innerWidth / 2, rocketY + window.innerHeight / 2, angle, loadingWrapper);
        }

        if (rocketAnimationActive) requestAnimationFrame(animate);
    }

    animate();
}

function createFireParticles(x, y, angle, wrapper) {
    if (!isCreatingParticles) return;
    const fireParticle = document.createElement('span');
    fireParticle.className = 'emoj-load-particle';
    fireParticle.textContent = '🔥';
    fireParticle.style.position = 'absolute';
    fireParticle.style.fontSize = '16px';
    fireParticle.style.opacity = '1';
    fireParticle.style.zIndex = '2';
    fireParticle.style.color = 'white';
    const offsetX = -Math.cos(angle) * 25;
    const offsetY = -Math.sin(angle) * 25;
    fireParticle.style.left = `${x + offsetX - 10}px`;
    fireParticle.style.top = `${y + offsetY}px`;
    fireParticle.style.animation = 'drift 1.2s linear forwards';

    wrapper.appendChild(fireParticle);

    fireParticle.addEventListener('animationend', () => {
        fireParticle.remove();
    });
}

function closeLoadScreen() {
    const existingParticles = document.querySelectorAll('.emoj-load-particle');
    existingParticles.forEach(particle => {
        particle.remove();
    });

    loadingWrapper.style.animation = 'wrapperOut 0.5s forwards';
    isLoadingVisible = false;

    isCreatingParticles = false;
    rocketAnimationActive = false;
}

function openLoadScreen() {
    isCreatingParticles = true;
    rocketAnimationActive = true;
    loadingWrapper.style.animation = 'wrapperIn 0.5s forwards';
    createRocketLoadingScreen();
    isLoadingVisible = true;
}

toggleButton.addEventListener('click', () => {
    isLoadingVisible ? closeLoadScreen() : openLoadScreen();
});

setTimeout(() => {
    createRocketLoadingScreen(true);
}, 0);
