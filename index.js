const labelName = document.querySelector('#label-name');
const inputName = document.querySelector('#input-name');
const labelEmail = document.querySelector('#label-email');
const inputEmail = document.querySelector('#input-email');
const popupClass = document.querySelector('.popup');
const closePopup = document.querySelector('#popup-close');
const popupBtn2 = document.querySelectorAll('.btn-popup');

inputName.addEventListener('focus', () => {
	labelName.classList.add('form__label--animate');
});
inputEmail.addEventListener('focus', () => {
	labelEmail.classList.add('form__label--animate');
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
