const menuIcon = document.querySelector('.menu-icon');
const menuPopup = document.getElementById('menu-popup');

// Toggle popup visibility on menu icon click
menuIcon.addEventListener('click', () => {
  menuPopup.classList.toggle('hidden');
});