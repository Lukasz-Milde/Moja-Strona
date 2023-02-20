console.log("siema, to jest tylko taki test, zeby sie upewnic , ze js dziala");

// ##################################################
// ##################################################
// ##################################################

const forArray = ["2", "5", "10"];

const forEachFn = (array, callback) => {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
};

function timesTwo(item) {
	let newItem = item * 2;
	console.log(newItem);
}

forEachFn(forArray, timesTwo);

// ##################################################
// ##################################################
// ##################################################

const mapArray = ["10", "20", "30", "40", "50"];
const newMapArray = [];

const mapFn = (array, callback) => {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
	return newMapArray;
};

function mapTimesTwo(item) {
	let newItem = item * 5;
	newMapArray.push(newItem);
}

console.log(mapFn(mapArray, mapTimesTwo));

// ##################################################
// ##################################################
// ##################################################

const obj = {
	name: "Lukasz",
	surname: "Milde",
};

function entries(person) {
	return Object.keys(person).map(function (key) {
		return [key, person[key]];
	});
}

console.log(entries(obj));

// ##################################################
// ##################################################
// ##################################################

const filterArray = [2, 5, 7, 8, 9, 10];
const newFilterArray = [];

const filterFn = (array, callback) => {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
	return newFilterArray;
};

function filterConditional(item) {
	if (item % 2 === 0) {
		newFilterArray.push(item);
	}
}

console.log(filterFn(filterArray, filterConditional));

// ##################################################
// ##################################################
// ##################################################

const reduceArray = [2, 3, 5];
let reduced = 0;

const reduceFn = (array, callback, initial) => {
	for (let i = initial; i < array.length; i++) {
		callback(array[i]);
	}
	console.log(reduced);
};

function reduceAdd(item) {
	reduced += item;
	return reduced;
}

reduceFn(reduceArray, reduceAdd, 0);

// ##################################################
// ##################################################
// ##################################################

const everyArray = [2, 5, 8, 10];
const newEveryArray = [];

const everyFn = (array, callback) => {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
	if (newEveryArray.length === everyArray.length) {
		return true;
	}
	return false;
};

function everyCheck(item) {
	if (item % 2 === 0) {
		newEveryArray.push(item);
	}
}

console.log(everyFn(everyArray, everyCheck));

// ##################################################
// ##################################################
// ##################################################

const someArray = [2, 5, 9];
const newSomeArray = [];

const someFn = (array, callback) => {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
	if (newSomeArray.length <= someArray.length && newSomeArray.length !== 0) {
		return true;
	}
	return false;
};

function someCheck(item) {
	if (item % 2 === 0) {
		newSomeArray.push(item);
	}
}

console.log(someFn(someArray, someCheck));

// ##################################################
// ##################################################
// ##################################################

function getMyAge(input) {
	if (typeof input === "object") {
		return new Date().getFullYear() - input.getFullYear();
	}
	if (typeof input === "string") {
		return new Date().getFullYear() - +input;
	}
	if (typeof input === "number") {
		return new Date().getFullYear() - input;
	}
}

console.log(getMyAge(new Date(1988, 1, 1)));
console.log(getMyAge("1990"));
console.log(getMyAge(1992));
