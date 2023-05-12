// const laptop1 = {
//   brand: "Asus",
//   ram: 16,
// };

// const laptop2 = {
//   brand: "Asus",
//   ram: 16,
// };

// const age1 = 22;
// const age2 = 22;

// console.log(age1 === age2);
// console.log(laptop1 === laptop2);

// let person = {
//   name: "John",
//   age: 25,
// };

// let member = person;
// let user = member;

// member.age = 26;
// person.name = "Diyorbek";

// console.log(person);
// console.log(member);

// function add() {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   console.log(sum);
// }

// add(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

// const add = function (a, b) {
//   console.log(a + b);
// };

// add(2, 3);

// const unaryFunction = (a) => console.log(a + 10);

// (function (a, b) {
//   console.log(a + b);
// })(2, 3);

// const add = (a, b, c) => a + b + c;
const add = (a) => (b) => (c) => a + b + c;

// console.log(add(1)(2)(3));

const upLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const checkTitle = (title) => {
  const splittedTitle = title.split(" ");
  let isTitleString = true;

  splittedTitle.forEach((word) => {
    // if (word[0] !== word[0].toUpperCase()) {
    //   isTitleString = false;
    // }
    // if (word[0].charCodeAt() < 65 || word[0].charCodeAt() > 90) {
    //   isTitleString = false;
    // }
    if (!upLetter.includes(word[0])) {
      isTitleString = false;
    }
  });

  return isTitleString;
};

// console.log(checkTitle("A Mind boggling Achievement")); // true

const vowels = "aoiue";

const countVowels = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
};

// console.log(countVowels("Prediction"));

const findLargestNums = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].sort((a, b) => b - a)[0]);
  }

  return result;
};

// console.log(
//   findLargestNums([
//     [4, 2, 7, 1],
//     [20, 70, 40, 90],
//     [1, 2, 0],
//   ])
// );

// const formatPhoneNumber = (arr) =>
//   `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;

// const formatPhoneNumber = (arr) =>
//   "(" +
//   arr[0] +
//   arr[1] +
//   arr[2] +
//   ") " +
//   arr[3] +
//   arr[4] +
//   arr[5] +
//   "-" +
//   arr[6] +
//   arr[7] +
//   arr[8] +
//   arr[9];

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890

// const isSymmetrical = (num) =>
//   num.toString() === num.toString().split("").reverse().join("");

// console.log(isSymmetrical(1234));

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const isPandigital = (num) => {
  num = num.toString();

  for (let i = 0; i < 10; i++) {
    if (!num.includes(numbers[i])) {
      return false;
    }
  }

  return true;
};

// console.log(isPandigital(90864523148909));
