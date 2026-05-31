'use strict';

{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-menu');

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    nav.classList.remove('open');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px',
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}