
window.onload= function() {
  element = document.getElementById('particles')
  console.log(element);
  if (window.getComputedStyle(element).display !== 'none') {
    console.log('should be working');
    Particles.init({
      selector: '#particles',
      maxParticles: 300,
      connectParticles: true
    });
  }
};