console.log("jazda!");

const one = document.querySelector(".one");

one.addEventListener("mouseenter", () => {
	one.classList.add("moveOne");
});
one.addEventListener("mouseleave", () => {
	one.classList.remove("moveOne");
});
