//! =================  1-masala  =================

let arr = [18, 25, 12, -30, 40];

function minMax(arr) {
  let max = arr[0],
    min = arr[0];
  for (let x of arr) {
    x > max ? (max = x) : (max = max);
  }

  for (let y of arr) {
    y < min ? (min = y) : (min = min);
  }
  return `Eng katta son ${max}\nEng kichik son ${min}`;
}

// console.log(minMax(arr));

//! =================  2-masala  =================

let text = "Menda 2 ta ruchka bor";

function replace(text) {
  let arr = text.split(" ");
  let result;

  for (let x of arr) {
    if (typeof x * 1 == Number) {
      result = "ishladi";
    }
  }

  return result;
}

// console.log(replace(text));

let text1 = "Mening 4 ta kompyuterim va 2 ta mashinam bor";
let text2 = "3 boshli ajdarho";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersWord = [
  "nol",
  "bir",
  "ikki",
  "uch",
  "to`rt",
  "besh",
  "olti",
  "yetti",
  "sakkiz",
  "to`qqiz",
];

function numberToWord(text) {
  const arrText = text.split(" ");

  for (let i = 0; i < arrText.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (arrText[i] == numbers[j]) {
        arrText[i] = numbersWord[j];
      }
    }
  }
  return arrText.join(" ");
}

// console.log(numberToWord(text1));

num = [1, 1, 1, 2, 2, 5, 3, 3, 4, 1, 4, 5, 6];

function singleNumber(nums) {
  let single;
  for (let i = 0; i < nums.length; i += 2) {
    if (nums.sort()[i] === nums.sort()[i + 1]) {
      single = nums.sort()[i + 2];
    }
  }

  return single;
}

console.log(singleNumber(num));
