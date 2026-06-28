export {};

const init = () => {
  const links = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.dataset.navLink;
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
