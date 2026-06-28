'use strict';

{
  // ハンバーガーメニュー
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-menu');

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('open');
  });

  document.querySelector('.nav-close').addEventListener('click', () => {
    nav.classList.remove('open');
  });

  // スクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });

  // スクロールアニメーション
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px',
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // KVスライダー
  const track = document.querySelector('.kv-track');
  const slides = document.querySelectorAll('.kv-slide');

  const dotsContainer = document.querySelector('.kv-dots');
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('kv-dot');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.kv-dot');

  const prevBtn = document.querySelector('.kv-prev');
  const nextBtn = document.querySelector('.kv-next');
  const lastIndex = slides.length - 1;
  let current = 0;
  let timer;
  prevBtn.style.visibility = 'hidden';

  const goTo = (index) => {
    current = index;
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[current].classList.add('active');
    prevBtn.style.visibility = current === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = current === lastIndex ? 'hidden' : 'visible';
    if (current === lastIndex) clearInterval(timer);
  };

  prevBtn.addEventListener('click', () => {
    if (current > 0) goTo(current - 1);
  });
  nextBtn.addEventListener('click', () => {
    if (current < lastIndex) goTo(current + 1);
  });
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  timer = setInterval(() => {
    if (current < lastIndex) goTo(current + 1);
  }, 3000);

  // タブ
  document.querySelectorAll('.tab-item').forEach(item => {
    item.addEventListener('click', () => {
      const target = item.dataset.tab;
      document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      item.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // モーダル
  const modal = document.querySelector('.modal');
  document.querySelector('.open-btn').addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
  });
  document.querySelector('.close-btn').addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  });

  document.addEventListener('click', (e) => {
    if (modal.style.display === 'block' && !modal.contains(e.target) && !e.target.closest('.open-btn')) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
}

{
  // 手書きjs
}