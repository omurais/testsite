"use-strict";

{
  const kv = document.querySelector('#kv');
  const next = document.querySelector('#next');
  const prev = document.querySelector('#prev');
  const mainImage = document.querySelector('#main-image');
  let activeIndex = 0;

  const images = [
    'img/pic0.png',
    'img/pic1.png',
    'img/pic2.png',];

// next、prevボタン
next.addEventListener('click', () => {
  activeIndex++;
  if(activeIndex >= images.length){
    activeIndex = 0;
  }
  mainImage.src = images[activeIndex];
});

prev.addEventListener('click', () => {
  activeIndex--;
  if(activeIndex < 0){
    activeIndex = images.length - 1;
  }
  mainImage.src = images[activeIndex];
});

// サムネイル
const thumbs = document.querySelectorAll('.thumbs');

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach((e) => {
      e.classList.remove('active');
    });

    thumb.classList.add('active');
  });
});
}