
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-fade-in-right, .animate-fade-in-left, .delay-100, .delay-200, .delay-300');
  elements.forEach(el => {
    el.style.opacity = '0';
  });
  
  setTimeout(() => {
    elements.forEach(el => {
      el.style.opacity = '1';
    });
  }, 100);
});