let headButton = document.querySelector('.head-form-button');
let form = document.querySelector('.checking-date-form');
let formButton = document.querySelector('.button-form');

formButton.onclick = function (evt) {
  evt.preventDefault();
  form.classList.add('close-form');
  
}

headButton.onclick = function (evt) {
	evt.preventDefault();
	form.classList.remove('close-form');
}