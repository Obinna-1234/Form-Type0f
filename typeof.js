var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');

function validateName(){
	var name = document.getElementById('contact-name').value;
	if (typeof name === "string") {
		nameError.innerHTML = "name is a string";
		return true;
	}else{
		nameError.innerHTML = "name is not string";
		return false;
	}
}
function validatePhone(){
	var phone = document.getElementById('contact-phone').value;
		if (typeof phone !== 0) {
			phoneError.innerHTML = "This is not a string";
			return true;
		}else{
			phoneError.innerHTML = "This is a string";
			return false;
		}
}
function validateEmail(){
	var email = document.getElementById('email-contact').value;
		if (typeof email === "string") {
			emailError.innerHTML = "email is a string";
			return true;
		}else{
			emailError.innerHTML = "email is not a string";
		}
}