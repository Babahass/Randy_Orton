// Small interactive fire glow on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      sec.style.transform = 'scale(1.02)';
      sec.style.boxShadow = '0 0 40px #ff6600';
    } else {
      sec.style.transform = 'scale(1)';
      sec.style.boxShadow = 'none';
    }
  });
});
