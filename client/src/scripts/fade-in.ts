export {};

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
    { threshold: 0, rootMargin: '0px 0px 150px 0px' },
  );
  targets.forEach((t) => {
    t.classList.add('fade-in-hidden');
    observer.observe(t);
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
