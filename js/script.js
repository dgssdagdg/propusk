const swiper = new Swiper('.secrives-sliders', {
	loop: true,
	slidesPerView: 'auto',
	pagination: {
	  el: '.secrives-pagination',
	},
	spaceBetween: 30,
});
const swiperTwo = new Swiper('.price-slider', {
	loop: true,
	pagination: {
	  el: '.price-pagination',
	},
	spaceBetween: 30,
	slidesPerView: 'auto'
});
const swiperThree = new Swiper('.clients-sliders', {
	loop: true,
	breakpoints: {
		320: {
		  spaceBetween: 55
		},
		340: {
			spaceBetween: 35
		  },
		400: {
			spaceBetween: 45
		},
		767: {
		  spaceBetween: 100
		},
		992: {
			spaceBetween: 120
		},
		1200: {
			spaceBetween: 90
		}
	  }
	// autoplay: {
	// 	delay: 3000,
	//   },
});

let body = document.body;
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('overflow');
})

window.onscroll = function(){
	var html = document.documentElement, body = document.body;
	var main = document.querySelector('.main');
	var BlkStyle = document.querySelector('.header');
	if(html.scrollTop>50||body.scrollTop>50) {
		BlkStyle.classList.add('header-fix');
		main.classList.add('main-p');
	} else {
		BlkStyle.classList.remove('header-fix');
		main.classList.remove('main-p');
	}
	 }