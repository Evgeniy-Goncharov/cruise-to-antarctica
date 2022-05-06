const links = document.querySelectorAll('a[href^="#"]');

const initScroll = () => {
  if (links) {
    for (let link of links) {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        const id = link.getAttribute('href');
        if (id.length > 1) {
          document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    }
  }
};

export {initScroll};
