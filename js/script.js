let headButton = document.querySelector('.head-form-button');
let form = document.querySelector('.checking-date-form');
let formButton = document.querySelector('.button-form');


headButton.onclick = function (evt) {
	evt.preventDefault();

	if(form.classList.contains('close-form')) {
		form.classList.toggle('close-form');
		form.classList.toggle('open-form')

	} else {
	  form.classList.toggle('open-form');	

	}
}


formButton.onclick = function (evt) {
  evt.preventDefault();
  if(form.classList.contains('close-form')) {
		form.classList.toggle('close-form');
		form.classList.toggle('open-form')

	} else {
	  form.classList.toggle('open-form');	

	}
  
}