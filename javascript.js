// JavaScript para detectar rolagem e adicionar a classe
window.addEventListener('scroll', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        el.classList.add('visible');
      }
    });
  });

  

 