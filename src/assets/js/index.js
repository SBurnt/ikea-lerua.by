import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import './lazyload';
import './modals';
import './swiper';
import './accordion';
import './header';

if (window.location.pathname === '/') {
	console.log('main');
} else {
	console.log('else');
}

if (module.hot) {
	module.hot.accept();
}
