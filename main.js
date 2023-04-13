const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	if (validateInputs()) {
		sendEmail();
	}
});

function validateInputs() {
	let isValid = true;

	if (nameInput.value.trim() === "") {
		isValid = false;
		setErrorFor(nameInput, "Name cannot be blank");
	} else {
		setSuccessFor(nameInput);
	}

	if (emailInput.value.trim() === "") {
		isValid = false;
		setErrorFor(emailInput, "Email cannot be blank");
	} else if (!isEmailValid(emailInput.value.trim())) {
		isValid = false;
		setErrorFor(emailInput, "Email is not valid");
	} else {
		setSuccessFor(emailInput);
	}

	if (subjectInput.value.trim() === "") {
		isValid = false;
		setErrorFor(subjectInput, "Subject cannot be blank");
	} else {
		setSuccessFor(subjectInput);
	}

	if (messageInput.value.trim() === "") {
		isValid = false;
		setErrorFor(messageInput, "Message cannot be blank");
	} else {
		setSuccessFor(messageInput);
	}

	return isValid;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const error = formControl.querySelector(".error-message");
	error.innerText = message;
	formControl.className = "form-control error";
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

function isEmailValid(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function sendEmail() {}
