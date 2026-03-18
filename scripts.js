// scripts.js

// Hamburger menu toggle
const hamburgerMenu = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Timer display
let timerDisplay = document.getElementById('timer');
let seconds = 0;

function startTimer() {
    setInterval(() => {
        seconds++;
        timerDisplay.innerText = seconds + ' seconds';
    }, 1000);
}

startTimer();
