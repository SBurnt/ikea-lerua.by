const accordionQuestion = document.querySelectorAll('.accordion__question');
const accordion = document.querySelectorAll('.accordion');

const accordionFn = function() {
	function parent(e) {
		const parentEl = e.target.parentNode;
		// parentEl.classList.toggle('active');

		if (parentEl.classList.contains('active')) {
			parentEl.classList.remove('active');
		} else {
			document.querySelectorAll('.accordion__item').forEach(child => {
				child.classList.remove('active');
				parentEl.classList.add('active');
			});
		}
	}

	accordionQuestion.forEach(item => {
		item.addEventListener('click', parent);
	});
};

if (accordion) {
	accordionFn();
}
