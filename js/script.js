// -- Меню бургер ----------------------------------------------
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
const menuBodyBurger = document.querySelector('.header__menu-item');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


const menuLinks = document.querySelectorAll('.header__menu-item');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
   function onMenuLinkClick(e) {

      if (iconMenu.classList.contains('_active')) {
         document.body.classList.remove('_lock');
         iconMenu.classList.remove('_active');
         menuBody.classList.remove('_active');
         menuBodyBurger.classList.toggle('_active');
      }

   }
}
// -- /Меню бургер ----------------------------------------------



// -- Прокрутка при клике ---------------------------------------------
const menuLinksGoTo = document.querySelectorAll('.header__menu-item a[data-goto]');
if (menuLinksGoTo.length > 0) {
	menuLinksGoTo.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLinkGoTo = e.target;
		if (menuLinkGoTo.dataset.goto && document.querySelector(menuLinkGoTo.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLinkGoTo.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 100;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
// -- /Прокрутка при клике ---------------------------------------------




// -- Headhesive (плавающая шапка) ---------------------------------------------

// Options
var options = {
	offset: 0
 }
 
 // Create a new instance of Headhesive.js and pass in some options
 var header = new Headhesive('.header', options);
// -- /Headhesive (плавающая шапка) ---------------------------------------------





//-- Scroll_animation ------------------------------------------------------
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
//-- /Scroll_animation ------------------------------------------------------






//-- Анимация цифер ------------------------------------------------------
var number = document.querySelector('.number'),
numberTop = number.getBoundingClientRect().top,
start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
if(window.pageYOffset < numberTop) {
	this.removeEventListener('scroll', onScroll);
	var interval = setInterval(function() {
		number.innerHTML = ++start;
		if(start == end) {
			clearInterval(interval);
			}
		}, 4);
	}
});


//--------------------------------------------------------------
var number02 = document.querySelector('.number02'),
numberTop02 = number02.getBoundingClientRect().top,
start02 = +number02.innerHTML, end02 = +number02.dataset.max02;

window.addEventListener('scroll', function onScroll() {
if(window.pageYOffset < numberTop02) {
	this.removeEventListener('scroll', onScroll);
	var interval02 = setInterval(function() {
		number02.innerHTML = ++start02;
		if(start02 == end02) {
			clearInterval(interval02);
			}
		}, 20);
	}
});

//--------------------------------------------------------------
var number03 = document.querySelector('.number03'),
numberTop03 = number03.getBoundingClientRect().top,
start03 = +number03.innerHTML, end03 = +number03.dataset.max03;

window.addEventListener('scroll', function onScroll() {
if(window.pageYOffset < numberTop03) {
	this.removeEventListener('scroll', onScroll);
	var interval03 = setInterval(function() {
		number03.innerHTML = ++start03;
		if(start03 == end03) {
			clearInterval(interval03);
			}
		}, 25);
	}
});


//--------------------------------------------------------------
var number04 = document.querySelector('.number04'),
numberTop04 = number04.getBoundingClientRect().top,
start04 = +number04.innerHTML, end04 = +number04.dataset.max04;

window.addEventListener('scroll', function onScroll() {
if(window.pageYOffset < numberTop04) {
	this.removeEventListener('scroll', onScroll);
	var interval04 = setInterval(function() {
		number04.innerHTML = ++start04;
		if(start04 == end04) {
			clearInterval(interval04);
			}
		}, 5);
	}
});

//-- /Анимация цифер ------------------------------------------------------
