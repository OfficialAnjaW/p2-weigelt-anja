// 1. HAMBURGER MENU

// Global Varibale
const hamburgerButton = document.getElementById('hamburger');
const navMenu = document.querySelector('.mobile-menu');

function toggleMenu() {
  navMenu.classList.toggle('show-mobile-menu');
}

hamburgerButton.addEventListener('click', toggleMenu);
