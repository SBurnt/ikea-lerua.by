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
