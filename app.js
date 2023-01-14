console.log("jazda!");

const one = document.querySelector(".one-grid");
const oneMove = document.querySelector(".one--move");

one.addEventListener("mouseenter", () => {
	console.log("hover dziala");
	oneMove.classList.add("one--Move__hover");
});
one.addEventListener("mouseleave", () => {
	oneMove.style.transition = "opacity: 0, transform(30px, 30px)";
});
