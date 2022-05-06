const menuButton = document.querySelector('[data-menu=menu-button]');
const menuElements = document.querySelectorAll('[data-menu]');

const initMenu = () => {
  let isMenuOpen = false;

  menuElements.forEach((element) => {
    element.classList.remove('no-js');
  });

  const openMenu = () => {
    menuElements.forEach((element) => {
      element.classList.add('menu-open');
    });

    menuButton.ariaLabel = 'Закрыть меню';
    isMenuOpen = true;
    document.addEventListener('click', closeMenu);
  };

  const closeMenu = () => {
    menuElements.forEach((element) => {
      element.classList.remove('menu-open');
    });

    menuButton.ariaLabel = 'Открыть меню';
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
