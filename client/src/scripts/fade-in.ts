(() => {
  const init = () => {
    const targets = document.querySelectorAll('.fade-on-scroll');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('fade-in'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    targets.forEach((t, i) => {
      t.classList.add('fade-in-hidden');
      (t as HTMLElement).style.animationDelay = `${i * 0.05}s`;
      observer.observe(t);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
