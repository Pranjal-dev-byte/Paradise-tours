const labelName = document.querySelector('#name');
const inputLabel = document.querySelector('#form__label--name');
const labelName1 = document.querySelector('#email');
const inputLabel1 = document.querySelector('#form__label--email');
const popupClass = document.querySelector('.popup');
const closePopup = document.querySelector('#popup-close');
const popupBtn2 = document.querySelectorAll('.btn-popup');

labelName.addEventListener('keyup', (e) => {
	if (labelName.value) {
		// console.log(labelName.value);
		inputLabel.innerHTML = `<label for="name">Full name:</label>`;
		inputLabel.classList.remove('u-hidden');
	} else {
		inputLabel.classList.add('u-hidden');
	}
});
labelName1.addEventListener('keyup', (e) => {
	if (labelName1.value) {
		// console.log(labelName1.value);
		inputLabel1.innerHTML = `<label for="email">Email address:</label>`;
		inputLabel1.classList.remove('u-hidden');
	} else {
		inputLabel1.classList.add('u-hidden');
	}
});
for (let element of popupBtn2) {
	element.addEventListener('click', () => {
		popupClass.classList.remove('u-hidden');
	});
}
closePopup.addEventListener('click', () => {
	// console.log('clicked');
	popupClass.classList.add('u-hidden');
});
