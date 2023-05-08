/** @format */

// 1-masala
let checkTitle = "hello everyone in the class";
let mainTitle = [];

/* function convertToFirstLetterUpperCase(checkTitle) {
	for (let i = 0; i < checkTitle.length; i++) {
		let mainTitle = checkTitle.split(" ");
		let secondArray = [];
		for (let j of mainTitle) {
			let results = [];
			for (let k = 0; k < j.length; k++) {
				let mainPoint = j[0].toUpperCase() + j.slice(k + 1);
				results.push(mainPoint);
				break;
			}
			let margedArray = results.join(" ");
			secondArray.push(margedArray);
		}
		let lastArray = secondArray.join(" ");
		// console.log(secondArray);
		console.log(lastArray);
		return mainTitle;
	}
}
convertToFirstLetterUpperCase(checkTitle);
 */

// 2-masala

/* let str = "uzbekistanafasdasjdsaiiii iisisidid";

function countVowels(str) {
	let textLetters = str.split("");
	console.log(textLetters);
	let counter = 0;

	let vowels = ["a", "i", "u", "o", "e"];

	for (let i = 0; i < textLetters.length; i++) {
		if (vowels.includes(textLetters[i])) {
			counter++;
		}
	}

	console.log(counter);
}
countVowels(str);
 */

// 3-masala

/* let arr = [
	[-34, -54, -74],
	[-32, -2, -65],
	[-54, 7, -43],
];

function findLargestNums(arr) {
	let lastArray = [];
	for (let x of arr) {
		let findTest = [];

		for (let k = 0; k < x.length; k++) {
			const myArray = x;
			let maxElement = Math.max(...myArray);

			findTest.push(maxElement);
			break;
		}

		let margedArray = findTest.join(" ");
		lastArray.push(margedArray);
	}
	console.log(lastArray);
}
findLargestNums(arr);
 */

// 4-masala

/* let phoneNumber = [1, 2, 3, 4, 5, 6, 6, 8, 9, 0, 5];
let numbersNotComma = phoneNumber.join("");

// console.log(numbersNotComma);

function formatPhoneNumber(phoneNumber) {
	for (let i = 0; i < phoneNumber.length; i++) {
		let firstPart = numbersNotComma.slice(i, 3);
		let secondPart = numbersNotComma.slice(i + 3, 6);

		let thirdPart = numbersNotComma.slice(i + 6, phoneNumber.length);

		console.log(
			"Telefon Farmat: ",
			`${"(" + firstPart + ")" + " " + secondPart + "-" + thirdPart}`
		);
		break;
	}
}
formatPhoneNumber(phoneNumber);
 */

// 5-masala
let num = 12345123;
let number = [];
let numberText = num.join("");

console.log(number);
console.log(numberText);

function isSymmetrical(num) {
	for (let i = 0; i < num.length; i++) {
		number.push(num[i]);
		console.log(num);
	}
	console.log(number);
}

isSymmetrical(7227);
