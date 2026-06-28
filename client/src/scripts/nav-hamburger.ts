export {};

const init = () => {
  const button = document.querySelector<HTMLButtonElement>('[data-hamburger]');
  const sidebar = document.querySelector<HTMLElement>('[data-mobile-sidebar]');
  if (!button || !sidebar) return;

  const setOpen = (open: boolean) => {
    sidebar.dataset.open = open ? 'true' : 'false';
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  setOpen(false);

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(sidebar.dataset.open !== 'true');
  });

  document.addEventListener('click', (e) => {
    if (sidebar.dataset.open === 'true' && !sidebar.contains(e.target as Node) && e.target !== button) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  sidebar.querySelectorAll('[data-mobile-link]').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
