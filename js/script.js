const humBurger = document.querySelector('#humbarger-icon');
const humBurgerMenu = document.querySelector('#humbargerMenu');
const closeMenu = document.querySelector('#close-menu');

humBurger.addEventListener('click', () => {
  if (humBurgerMenu.style.display === 'none') {
    humBurgerMenu.style.display = 'block';
  } else {
    humBurgerMenu.style.display = 'none';
  }
});

closeMenu.addEventListener('click', () => {
  if (humBurgerMenu.style.display === 'block') {
    humBurgerMenu.style.display = 'none';
  }
});