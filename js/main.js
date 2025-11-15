'use strict';

{
  // 日時操作
//   const d = new Date(2000, 3, 11);
// console.log(d);
// console.log(d.getTime());

// const d2 = new Date(d.getTime() + 1000);
// console.log(d2);

// new Date() - new Date(2023, 5, 10);
// const diff = new Date().getTime() - new Date(2023, 5, 10).getTime();
// const diff = Date.now() - new Date(2023, 5, 10).getTime();
// const days = Math.floor(diff / 1000 / 60 / 60 / 24);
// console.log(diff);
// console.log(days);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const d = new Date();
const month = months[d.getMonth()];
const date = String(d.getDate()).padStart(2, '0');
const day = days[d.getDay()];

console.log(`${month} ${date}, ${day}`);

window.addEventListener('load', () => {
    document.querySelector('#now').textContent = `${month} ${date}, ${day}:JPN`;
  });


  // const dBackUp = new Date(d.getTime());
  // d.setDate(d.getDate() + 100);
  // console.log(d.toLocaleString());
  // console.log(dBackUp.toLocaleString());

  // console.log(d.toLocaleString());
  // console.log(d.getFullYear());
  // console.log(d.getMonth());
  // console.log(d.getDate());
  // console.log(d.getHours());
  // console.log(d.getMinutes());
  // console.log(d.getSeconds());
  // console.log(d.getMilliseconds());
  // console.log(d.getDay());
}

{
  // スライドショー
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('main-image');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  let activeIndex = 0;

  thumbnails[0].addEventListener('click', () => {
    activeIndex = 0;
    mainImage.src = thumbnails[1].src;
    thumbnails[0].classList.add('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
  });

  thumbnails[1].addEventListener('click', () => {
    activeIndex = 1;
    mainImage.src = thumbnails[1].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.add('active');
    thumbnails[2].classList.remove('active');
  });

  thumbnails[2].addEventListener('click', () => {
    activeIndex = 2;
    mainImage.src = thumbnails[1].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.add('active');
  });

  next.addEventListener('click', () => {
    activeIndex ++;
    if(activeIndex > 2){
      activeIndex = 0;
    }

    mainImage.src = thumbnails[activeIndex].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
    thumbnails[activeIndex].classList.add('active');
  });

  prev.addEventListener('click', () => {
    activeIndex --;
    if(activeIndex < 0){
      activeIndex = 2;
    }

    mainImage.src = thumbnails[activeIndex].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
    thumbnails[activeIndex].classList.add('active');
  });
}

{
  // モーダルウィンドウ
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

   mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });
}

{
  // DOM
  document.querySelector('input').addEventListener('input', () => {
    const pElm = document.querySelector('p');
    const inputElm = document.querySelector('input');
    // pElm.textContent = inputElm.value;
    pElm.textContent = inputElm.value.length;
   });
}

{
 const modal = $("#js-modal");
const overlay = $("#js-overlay");
const close = $("#js-close");
const open = $("#js-open");

open.on('click', function () { //ボタンをクリックしたら
  modal.addClass("open"); // modalクラスにopenクラス付与
  overlay.addClass("open"); // overlayクラスにopenクラス付与
});
close.on('click', function () { //×ボタンをクリックしたら
  modal.removeClass("open"); // overlayクラスからopenクラスを外す
  overlay.removeClass("open"); // overlayクラスからopenクラスを外す
});
overlay.on('click', function () { //背景をクリックしたら
  modal.removeClass("open"); // overlayクラスからopenクラスを外す
  overlay.removeClass("open"); // overlayクラスからopenクラスを外す
});
}

{
  // jQuery carousel
  $(".slide-items").slick({
    centerMode: true,// 前後スライドを部分表示
  centerPadding: '10%',// 両端の見切れるスライド幅
  dots: true,
  });
}

{
  $(function(){
	// 変数に要素を入れる
	var open = $('.modal-open'),
		close = $('.modal-close'),
		container = $('.modal-container');

	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){	
		container.addClass('active');
		return false;
	});

	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){	
		container.removeClass('active');
	});

	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
});
}