
// Parallax effect for background images
document.querySelectorAll('.parallax').forEach(layer => {
  const speed = parseFloat(layer.dataset.speed || '0.2');
  const onScroll = () => {
    const y = window.scrollY * speed;
    layer.style.transform = `translate3d(0, ${y}px, 0)`;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

// Current year
document.getElementById('year').textContent = new Date().getFullYear();
