const header = document.querySelector('.page-header');
const menuButton = header.querySelector('.menu-button');
const nav = header.querySelector('.main-nav');

const initMenu = () => {
  let isMenuOpen = false;

  header.classList.remove('no-js');
  menuButton.classList.remove('no-js');
  nav.classList.remove('no-js');

  const openMenu = () => {
    header.classList.add('menu-open');
    menuButton.classList.add('menu-open');
    menuButton.ariaLabel = 'Закрыть меню';
    nav.classList.add('menu-open');
    isMenuOpen = true;
    document.addEventListener('click', closeMenu);
  };

  const closeMenu = () => {
    header.classList.remove('menu-open');
    menuButton.classList.remove('menu-open');
    menuButton.ariaLabel = 'Открыть меню';
    nav.classList.remove('menu-open');
    isMenuOpen = false;
    document.removeEventListener('click', closeMenu);
  };

  closeMenu();

  menuButton.addEventListener('click', (evt) => {
    evt.stopPropagation();

    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });
};

export {initMenu};
