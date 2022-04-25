const header = document.querySelector('.page-header');
const menuButton = header.querySelector('.menu-button');
const nav = header.querySelector('.main-nav');

let isMenuOpen = false;

header.classList.remove('page-header--no-js');
menuButton.classList.remove('menu-button--no-js');
nav.classList.remove('main-nav--no-js');

const openMenu = () => {
  header.classList.add('page-header--nav-open');
  menuButton.classList.add('menu-button--nav-open');
  nav.classList.add('main-nav--nav-open');
  isMenuOpen = true;
};

const closeMenu = () => {
  header.classList.remove('page-header--nav-open');
  menuButton.classList.remove('menu-button--nav-open');
  nav.classList.remove('main-nav--nav-open');
  isMenuOpen = false;
};

menuButton.addEventListener('click', function () {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});
