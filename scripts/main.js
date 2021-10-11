// Navigation 
const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

burger.addEventListener('click', () => {
  nav.classList.toggle('is-active');
  burger.classList.toggle('is-active');
})
// Color theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
    document.body.classList.toggle('dark-mode')
}

themeToggle.addEventListener('click', () => {
    if (prefersDarkTheme.matches) {
        document.body.classList.toggle('light-mode')
        var theme = document.body.classList.contains('light-mode') ? 'light' : 'dark'
    } else {
        document.body.classList.toggle('dark-mode');
        var theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light'
    }
    localStorage.setItem('theme', theme)
})

// Modal Uno 
const modalUno = document.querySelector('.modal-uno-base');
const modalTriggerUno = document.querySelector('#modal-trigger-uno');
const closeModalUno = document.querySelector('#close-modal-uno');
const modalUnoOverlay = document.querySelector('.modal-overlay');
const body = document.querySelector('body');
modalUno.style.display = 'none';
modalTriggerUno.addEventListener('click', () => {
    modalUno.style.display = 'block';
    body.classList.toggle('body-fixed');
});
modalUnoOverlay.addEventListener('click', () => {
    modalUno.style.display = 'none';
     body.classList.remove('body-fixed');
})
closeModalUno.addEventListener('click', () => {
    modalUno.style.display = 'none'
     body.classList.remove('body-fixed');
});
