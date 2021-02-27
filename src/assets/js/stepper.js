const stepper = document.querySelectorAll('.js-stepper');

if (stepper) {
	stepper.forEach(el => {
		el.addEventListener('click', e => {
			if (e.target.classList.contains('stepper__btn--plus')) {
				let currentValue = parseInt(el.querySelector('.stepper__input').value, 10);
				currentValue++;
				el.querySelector('.stepper__input').value = currentValue;

				if (el.querySelector('.stepper__input').value > 998) {
					el.querySelector('.stepper__input').value = 999;
				}
			}

			if (e.target.classList.contains('stepper__btn--minus')) {
				let currentValue = parseInt(el.querySelector('.stepper__input').value, 10);
				currentValue--;
				el.querySelector('.stepper__input').value = currentValue;

				if (el.querySelector('.stepper__input').value <= 1) {
					el.querySelector('.stepper__input').value = 1;
				}
			}
		});
	});
}
