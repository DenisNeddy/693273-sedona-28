var headButton = document.querySelector('.head-form-button');
var form = document.querySelector('.checking-date-form');
var formButton = document.querySelector('.button-form');


headButton.addEventListener("click", function (evt) {
	
	evt.preventDefault();
	if(form.classList.contains('open-form')) {
		
		form.classList.toggle('open-form');
		form.classList.toggle('close-form');
	} else {
		form.classList.toggle('close-form');
		form.classList.toggle('open-form');
	}
}); 


formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if(form.classList.contains('open-form')) {
		form.classList.toggle('open-form');
		form.classList.toggle('close-form')

	} else {
	  form.classList.toggle('close-form');
	   form.classList.toggle('open-form');		

	}
  
}
);