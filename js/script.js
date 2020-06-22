var headButton = document.querySelector('.head-form-button');
var form = document.querySelector('.checking-date-form');
var formButton = document.querySelector('.button-form');
var arrive = document.querySelector('[name=arrive-date]')
var departure = document.querySelector('[name=departure-date]');


headButton.addEventListener("click", function (evt) {
	
	evt.preventDefault();
	form.classList.remove('form-error');
	if(form.classList.contains('open-form')) {
		
		form.classList.toggle('open-form');
		form.classList.toggle('close-form');
	} else {
		form.classList.toggle('close-form');
		form.classList.toggle('open-form');
	}
	arrive.focus();
}); 


form.addEventListener("submit", function (evt) {
  if(!arrive.value || !departure.value) {
     evt.preventDefault();
      form.classList.remove('form-error');
       form.offsetWidth = form.offsetWidth;
     form.classList.add('form-error');
     
  }

  else {
  	evt.preventDefault();
  	form.classList.remove('form-error');
  	localStorage.setItem("arrive", arrive.value);
  	localStorage.setItem("departure", departure.value);
  	if(form.classList.contains('open-form')) {
		form.classList.toggle('open-form');
		form.classList.toggle('close-form')

	} else {

	  form.classList.toggle('close-form');
	   form.classList.toggle('open-form');		
	}
  }
  
 
}
);