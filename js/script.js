var headButton = document.querySelector(".head-form-button");
var form = document.querySelector(".checking-date-form");
var formButton = document.querySelector(".button-form");
var arrive = document.querySelector("[name=arrive-date]");
var departure = document.querySelector("[name=departure-date]");

headButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	("close-form");
	form.classList.toggle("close-form");
	form.classList.toggle("open-form");
	arrive.focus();
}); 

form.addEventListener("submit", function (evt) {
  if(!arrive.value || !departure.value) {
     evt.preventDefault();
     form.classList.remove("form-error");
     form.offsetWidth = form.offsetWidth;
     form.classList.add("form-error");   
  }   
 
});
