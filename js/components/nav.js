export function initNav() {
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('up', window.scrollY > 20);
  }, { passive: true });
}
