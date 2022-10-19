const Buttons = document.querySelectorAll('.carousel-button');

Buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		let offset = e.target.id === 'next' ? 1 : -1;
		// console.log(offset)
		const slides = button.closest('.carousel').querySelector('.slides')
		const activeSlide = document.querySelector('.active')
		// console.log(slides)
		// console.log(activeSlide)

		let newIndex = [...slides.children].indexOf(activeSlide) + offset

		// console.log(newIndex);

		if(newIndex < 0){
			newIndex = slides.children.length - 1;
		}

		if(newIndex >= slides.children.length) {
			newIndex = 0
		}

		slides.children[newIndex].classList.add('active');
		// console.log(activeSlide);
		activeSlide.classList.remove('active')
	})
})