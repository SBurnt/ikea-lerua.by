// header scroll on desktop START
function headerScrollDesc() {
	const header = document.querySelector('.header');
	if (header.offsetHeight <= window.pageYOffset) {
		header.classList.add('transform');
	} else {
		header.classList.remove('transform');
	}

	if (header.offsetHeight + 70 < window.pageYOffset) {
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');
	}
}

function headerScrollDescRes() {
	if (window.innerWidth >= 1200) {
		headerScrollDesc();

		window.addEventListener('scroll', function() {
			headerScrollDesc();
		});
	}
}

headerScrollDescRes();
window.addEventListener('resize', function() {
	headerScrollDescRes();
});
// header scroll on desktop END

// header mob menu open START
const mobMenu = document.querySelector('.header__inner');
const burger = document.querySelector('.js-burger');
const btnCloseMenu = document.querySelector('.js-close-mob-menu');
const overlay = document.querySelector('.overlay');

// const lockScroll = () => {
// 	document.body.classList.add('lock');
// };

// const unlockScroll = () => {
// 	document.body.classList.remove('lock');
// };

burger.addEventListener('click', () => {
	mobMenu.classList.add('open');
	overlay.classList.add('open');
	// lockScroll();
});

overlay.addEventListener('click', () => {
	mobMenu.classList.remove('open');
	overlay.classList.remove('open');
	// unlockScroll();
});

btnCloseMenu.addEventListener('click', () => {
	mobMenu.classList.remove('open');
	overlay.classList.remove('open');
	// unlockScroll();
});
// header mob menu open END
