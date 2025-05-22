// Fade-in helper class
function fadeIn(element) {
  element.classList.add('fade-in');
  setTimeout(() => element.classList.remove('fade-in'), 300); // match animation duration
}

function navigateTo(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    fadeIn(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', '#' + sectionId); // update URL
  }
}

// On page load, check URL hash
window.addEventListener('DOMContentLoaded', () => {
  const initial = location.hash.replace('#', '') || 'home';
  navigateTo(initial);
});
