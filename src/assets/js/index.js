import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import './lazyload';
import './modals';
import './swiper';
import './accordion';
import './header';
import './stepper';

if (window.location.pathname === '/') {
	document.querySelector('.header').style.backgroundColor = 'transparent';
}

if (module.hot) {
	module.hot.accept();
}
