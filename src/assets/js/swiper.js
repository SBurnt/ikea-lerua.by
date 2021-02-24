import Swiper from '../../../node_modules/swiper/swiper-bundle';

const sliderList = document.querySelectorAll('.js-slider-init');
if (sliderList) {
	console.log('sliderList', sliderList);
	sliderList.forEach(el => {
		const swiper = new Swiper(el, {
			loop: true,
			// autoplay: {
			// 	delay: 5000,
			// 	disableOnInteraction: false,
			// },
			navigation: {
				nextEl: '.slider__arrows-next',
				prevEl: '.slider__arrows-prev',
			},
		});
	});
}
