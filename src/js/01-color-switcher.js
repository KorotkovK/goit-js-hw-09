function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;
let currentColor = '';

function startColorChange() {
    intervalId = setInterval(() => {
        currentColor = getRandomHexColor();
        document.body.style.backgroundColor = currentColor;
    }, 1000);

    startButton.disabled = true;
}

function stopColorChange() {
    clearInterval(intervalId);
    document.body.style.backgroundColor = currentColor;
    startButton.disabled = false;
}

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);
