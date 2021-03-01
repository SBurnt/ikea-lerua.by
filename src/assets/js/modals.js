const modalOverlay = document.querySelector('.modal-overlay');
const btnModalClose = document.querySelectorAll('.modal__btn-close');
const modals = document.querySelectorAll('.modal');

modalOverlay.addEventListener('click', e => {
	if (e.target === modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach(el => {
			el.classList.remove('modal--visible');
		});
	}
});

btnModalClose.forEach(el => {
	el.addEventListener('click', () => {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach(item => {
			item.classList.remove('modal--visible');
		});
	});
});
