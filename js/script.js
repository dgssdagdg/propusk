const progresOne = document.querySelector('.range-one');
progresOne.addEventListener('input', function() {
  var progressTotal = document.querySelector('.total-range-one');
  const value = this.value;
  progressTotal.innerText = value * 15;
  this.style.background = `linear-gradient(to right, #CB2222 0%, #CB2222 ${value}%, #E8EBF2 ${value}%)`
})
const progresTwo = document.querySelector('.range-two');
progresTwo.addEventListener('input', function() {
  var progressTotal = document.querySelector('.total-range-two');
  const value = this.value;
  progressTotal.innerText = value;
  this.style.background = `linear-gradient(to right, #CB2222 0%, #CB2222 ${value}%, #E8EBF2 ${value}%)`
})



const swiper = new Swiper('.secrives-sliders', {
	loop: true,
	slidesPerView: 'auto',
	pagination: {
	  el: '.secrives-pagination',
	  clickable: true,
	},
	spaceBetween: 30,
});
const swiperTwo = new Swiper('.price-slider', {
	loop: true,
	pagination: {
	  el: '.price-pagination',
	  clickable: true,
	},
	spaceBetween: 30,
	slidesPerView: 'auto'
});
const swiperThree = new Swiper('.clients-sliders', {
	loop: true,
	slidesPerView: 'auto',
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
const swiperFour = new Swiper('.comment-sliders', {
	loop: true,
	slidesPerView: '1',
	speed: 800,
	pagination: {
		el: '.comment-pagination',
		clickable: true,
	  },
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
			spaceBetween: 135
		}
	},
	navigation: {
		nextEl: '.comment-button-next',
		prevEl: '.comment-button-prev',
	  },
});
const swiperVideo = new Swiper('.video-slide', {
	loop: true,
	slidesPerView: 'auto',
	speed: 800,
	spaceBetween: 31,
	navigation: {
		nextEl: '.video-next',
		prevEl: '.video-prev',
	},
	pagination: {
		el: '.video-pagination',
		clickable: true,
	},
	breakpoints: {
		320: {
		  spaceBetween: 65
		},

		400: {
			spaceBetween: 30
		},
	},
});
const swiperReferens= new Swiper('.reference-slide', {
	loop: true,
	slidesPerView: 'auto',
	speed: 800,
	navigation: {
		nextEl: '.reference-next',
		prevEl: '.reference-prev',
	},
	  pagination: {
		el: '.reference-pagination',
		clickable: true,
	},
	  breakpoints: {
		320: {
		  spaceBetween: 65
		},

		400: {
			spaceBetween: 30
		},
	},
});
const swiperStamps= new Swiper('.stamps-sliders', {
	loop: true,
	slidesPerView: 'auto',
	speed: 800,
	  breakpoints: {
		320: {
			spaceBetween: 40
		},
		350: {
			spaceBetween: 15
		},
		390: {
			spaceBetween: 35
		  },
		520: {
		  spaceBetween: 45
		},
		900: {
			spaceBetween: 35
		},
		1200: {
			spaceBetween: 30
		},
	},
});
const swiperAuto= new Swiper('.auto-sliders', {
	loop: true,
	slidesPerView: 'auto',
	speed: 800,
	spaceBetween: 40,
	navigation: {
		nextEl: '.auto-button-next',
		prevEl: '.auto-button-prev',
	},
});
const swiperVip= new Swiper('.why-sliders', {
	loop: true,
	slidesPerView: 'auto',
	speed: 800,
	spaceBetween: 40,
	pagination: {
		el: '.why-pagination',
		clickable: true,
	},
});

let body = document.body;
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('overflow');
})
document.addEventListener('click', function(event) {


	//Вот функция для селекта (input)-------------------------
    if (event.target.closest('.online-select')) {
		let online = event.target.closest('.online-select');
        online.classList.toggle('_online-select-open');
    }

    if (event.target.closest('.online-block-item')) {
        var popClick = event.target.closest('.online-block-item').textContent;
		fz = event.target.closest('.online-select');
		let inpustsast = fz.querySelector('.online-select-input')
        inpustsast.value = popClick;
    }



	if (event.target.closest('.tabl-open')) {
		console.log('kajfsglkwdas')
		let tabl = document.querySelector('.tables');
		let tuman = document.querySelector('.rnis-img-tuman');
		tabl.classList.toggle('tables-active');
		tuman.classList.toggle('tables-active');
	}
	if (event.target.closest('.list-items-title-open')) {
		console.log('fdagasg')
		let ev = event.target;
		let arrow = ev.closest('.list-items-block');
		let listMain = ev.closest('.list-items')
		let list = listMain.querySelector('.list-items-boxs');
		arrow.classList.toggle('list-items-title-active')
		list.classList.toggle('list-items-boxs-active');
	}
	if (event.target.closest('.list-title')) {
		let ev = event.target;
		let arrow = ev.closest('.list-title-open');
		let listMain = ev.closest('.list');
		let list = listMain.querySelector('.list-body');
		list.classList.toggle('list-items-list-active');
		arrow.classList.toggle('list-items-title-active')
	}

	let documentItemOne = document.querySelector('.document-btn-one');
	let documentBlockOne= document.querySelector('.document-block-one');
	let documentItemTwo = document.querySelector('.document-btn-two');
	let documentBlockTwo= document.querySelector('.document-block-two');
	if (event.target.closest('.document-btn-one') && documentItemTwo.closest('.document-btn-active')) {
		let item = event.target;
		item.classList.add('document-btn-active');
		let block = document.querySelector('.document-block-one');
		block.classList.add('document-block-active');
		documentItemTwo.classList.remove('document-btn-active');
		documentBlockTwo.classList.remove('document-block-active');
	}
	if (event.target.closest('.document-btn-two') && documentItemOne.closest('.document-btn-active')) {
		let item = event.target;
		item.classList.add('document-btn-active');
		let block = document.querySelector('.document-block-two');
		block.classList.add('document-block-active');
		documentItemOne.classList.remove('document-btn-active');
		documentBlockOne.classList.remove('document-block-active');
	}

	if (event.target.closest('.questions-item-title')) {
		let questionsItem = event.target.closest('.questions-item');
		questionsItem.classList.toggle('questions-item-active');
	}

//Код для открытия поп апов
	if (event.target.closest('.pop-up-open-one')) {
		let pupUp = document.querySelector('.pop-up-one');
		pupUp.classList.toggle('pop-up-active');
	}
	if (event.target.closest('.pop-up-open-two')) {
		let pupUp = document.querySelector('.pop-up-two');
		pupUp.classList.toggle('pop-up-active');
	}
	if (event.target.closest('.pop-up-open-three')) {
		let pupUp = document.querySelector('.pop-up-three');
		pupUp.classList.toggle('pop-up-active');
	}

	if(event.target.closest('.flip-card-btn')) {
		let FlipItem = event.target.closest('.flip-card');
		FlipItem.classList.toggle('flip-card-hover');
	}
	let viewTwo = document.querySelector('.fuel-forms-two');
    let viewOne = document.querySelector('.fuel-forms-one');
    let viewOneBtn = document.querySelector('.fuel-forms-viwe-one');
    let viewTwoBtn = document.querySelector('.fuel-forms-viwe-two');
    if (event.target.closest('.fuel-forms-viwe-two') && viewOne.closest('.fuel-forms-active')) {
        viewTwo.classList.add('fuel-forms-active');
        viewOne.classList.remove('fuel-forms-active');
        viewTwoBtn.classList.add('fuel-forms-viwe-active');
        viewOneBtn.classList.remove('fuel-forms-viwe-active');
    }
    if (event.target.closest('.fuel-forms-viwe-one') && viewTwo.closest('.fuel-forms-active')) {
        viewOne.classList.add('fuel-forms-active');
        viewTwo.classList.remove('fuel-forms-active');
        viewTwoBtn.classList.remove('fuel-forms-viwe-active');
        viewOneBtn.classList.add('fuel-forms-viwe-active');
    }

	if (event.target.closest('.fuel-items')) {
		let fuelItems = event.target.closest('.fuel-items');
		let fuelItemGlobal = fuelItems.querySelector('.fuel-item-active');

		if(event.target.closest('.fuel-item') && !event.target.closest('.fuel-item-active'))  {
			let fuelNumber = event.target.closest('.fuel-number');
			let fuelItem = fuelNumber.closest('.fuel-item');
			fuelItem.classList.add('fuel-item-active');
			fuelItemGlobal.classList.remove('fuel-item-active');
		}
	}
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

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
	  total: t,
	  days: days,
	  hours: hours,
	  minutes: minutes,
	  seconds: seconds
	};
}
   
function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector(".days");
	var hoursSpan = clock.querySelector(".hours");
	var minutesSpan = clock.querySelector(".minutes");
	var secondsSpan = clock.querySelector(".seconds");
   
	function updateClock() {
	  var t = getTimeRemaining(endtime);
   
	  if (t.total <= 0) {
		clearInterval(timeinterval);
		var deadline = new Date(Date.parse(new Date()) + 90 * 20 * 29 * 63 * 1000);
		initializeClock('countdown', deadline);
	  }
	  if (t.total <= 0) {
		clearInterval(timeinterval);
		var deadline = new Date(Date.parse(new Date()) + 90 * 20 * 29 * 63 * 1000);
		initializeClock('countdown-two', deadline);
	  }
   
	  daysSpan.innerHTML = t.days;
	  hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
	  minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
	  secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
	}
   
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}
   
var deadline = new Date(Date.parse(new Date()) + 90 * 20 * 29 * 63 * 1000);
initializeClock("countdown", deadline);
var deadlineTwo = new Date(Date.parse(new Date()) + 90 * 20 * 29 * 63 * 1000);
initializeClock("countdown-two", deadlineTwo);