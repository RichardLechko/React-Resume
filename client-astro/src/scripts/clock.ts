(() => {
  const format = () => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    return `${time} CST (UTC-06)`;
  };

  const init = () => {
    const el = document.querySelector<HTMLElement>('[data-clock] strong');
    if (!el) return;
    el.textContent = format();
    setInterval(() => { el.textContent = format(); }, 60_000);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
