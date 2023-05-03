const wordSpacingDecreaseBtn = document.getElementById('wordSpacingDecreaseBtn');
const wordSpacingIncreaseBtn = document.getElementById('wordSpacingIncreaseBtn');
const fontSizeDecreaseBtn = document.getElementById('fontSizeDecreaseBtn');
const fontSizeIncreaseBtn = document.getElementById('fontSizeIncreaseBtn');

const wordSpacingHistory = [];
const fontSizeHistory = [];
let wordSpacingIndex = -1;

wordSpacingDecreaseBtn.addEventListener('click', () => {
  decreaseWordSpacing();
});

wordSpacingIncreaseBtn.addEventListener('click', () => {
  increaseWordSpacing();
});

fontSizeDecreaseBtn.addEventListener('click', () => {
    decreaseFontSize();
});

fontSizeIncreaseBtn.addEventListener('click', () => {
    increaseFontSize();
});

function decreaseWordSpacing() {
    const body = document.body;
    const currentWordSpacing = parseInt(getComputedStyle(body).getPropertyValue('word-spacing'));
    const newWordSpacing = currentWordSpacing - 2; // decrease word spacing by 2 pixels
  
    body.style.wordSpacing = `${newWordSpacing}px`;
    wordSpacingHistory.push(currentWordSpacing);
    wordSpacingIndex++;
}

function increaseWordSpacing() {
    const body = document.body;
    const currentWordSpacing = parseInt(getComputedStyle(body).getPropertyValue('word-spacing'));
    const newWordSpacing = currentWordSpacing + 2; // increase word spacing by 2 pixels
  
    body.style.wordSpacing = `${newWordSpacing}px`;
    wordSpacingHistory.push(currentWordSpacing);
    wordSpacingIndex++;
}

// Function to increase font size
function increaseFontSize() {
    const elements = document.querySelectorAll("*"); // Get all elements
    for (let i = 0; i < elements.length; i++) {
        let fontSize = window.getComputedStyle(elements[i]).getPropertyValue("font-size"); // Get current font size
        fontSize = parseInt(fontSize) + 1 + "px"; // Increase font size by 1px
        elements[i].style.fontSize = fontSize; // Set new font size
    }
}

// Function to decrease font size
function decreaseFontSize() {
    const elements = document.querySelectorAll("*"); // Get all elements
    for (let i = 0; i < elements.length; i++) {
        let fontSize = window.getComputedStyle(elements[i]).getPropertyValue("font-size"); // Get current font size
        fontSize = parseInt(fontSize) - 1 + "px"; // Decrease font size by 1px
        elements[i].style.fontSize = fontSize; // Set new font size
    }
}

// Event listener for increase font size button
document.getElementById("fontSizeIncreaseBtn").addEventListener("click", function() {
    increaseFontSize();
});

// Event listener for decrease font size button
document.getElementById("fontSizeDecreaseBtn").addEventListener("click", function() {
    decreaseFontSize();
});