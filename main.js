console.log("siema");

function includes(array, elementToFind, fromIndex) {
	for (let element of array) {
		if (element === elementToFind) {
			const correct = array.indexOf(element, fromIndex);
			return {
				isContain: true,
				index: correct,
			};
		}
	}
	return false;
}

const someArray = ["apple", "banana", "cherry", "bread", "milk", "tomato"];

console.log(includes(someArray, "tomato", 2));
