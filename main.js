const form = document.querySelector(".form");
const nameInput = document.getElementById("name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const nameValue = nameInput.value.trim();
	const emailValue = emailInput.value.trim();
	const subjectValue = subjectInput.value.trim();
	const messageValue = messageInput.value.trim();

	if (nameValue === "") {
		nameInput.value = "Please enter your name";
		nameInput.focus();
		return;
	}

	if (emailValue === "") {
		emailInput.value = "Please enter your email address";
		emailInput.focus();
		return;
	}

	if (!isValidEmail(emailValue)) {
		emailInput.value = "Please enter a valid email address";
		emailInput.focus();
		return;
	}

	if (subjectValue === "") {
		subjectInput.value = "Please enter a subject";
		subjectInput.focus();
		return;
	}

	if (messageValue === "") {
		messageInput.value = "Please enter a message";
		messageInput.focus();
		return;
	}

	form.submit();
});

function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
