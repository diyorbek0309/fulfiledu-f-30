const fruits = ["Banana", "Orange", "Apple", "Mango"];
const numbers = [67, 35, 12, 88, 132];

const filteredNumbers = numbers.filter(function (num) {
  return num > 50;
});

const firstItem = numbers.find(function (num) {
  return num > 50;
});

const firstItemIndex = numbers.findIndex(function (num) {
  return num > 50;
});

// fruits.push("Limon");
// fruits.pop();
// fruits.unshift("Granade");
// fruits.shift();
// fruits.splice(1, 2, "Limon", "Cherry");
// delete fruits[1];
// fruits.splice(2, 2);
// const slicedFruits = fruits.slice(1, 3);
// const joinedFruits = fruits.join("-----");
// const reversedFruits = fruits.reverse();
// const sortedFruits = fruits.sort();
// const sortedNumbers = numbers.sort(function (a, b) {
//   return b - a;
// });

// fruits.forEach(function (fruit) {
//   console.log(fruit + "D");
// });

// const newFruits = fruits
//   .map(function (fruit) {
//     return fruit + "D";
//   })
//   .indexOf("OrangeD");

// console.log(firstItemIndex);

const arr1 = [34, 12, 76, 87, 43];

// drop(arr1, 3) => [87, 43]
const arr2 = [76, 45, -28, 99];

function maxMin(arr) {
  let arrMax = arr[0],
    arrMin = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arrMax < arr[i]) {
      arrMax = arr[i];
    }

    if (arr[i] < arrMin) {
      arrMin = arr[i];
    }
  }

  console.log("Arrayning eng katta elementi: ", arrMax);
  console.log("Arrayning eng kichik elementi: ", arrMin);
}

// maxMin(arr1);

const text = "3 boshli aj4darho";

function numberToText(text) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const numbersText = [
    "nol",
    "bir",
    "ikki",
    "uch",
    "to'rt",
    "besh",
    "olti",
    "yetti",
    "sakkiz",
    "to'qqiz",
  ];

  for (let i = 0; i < text.length; i++) {
    if (numbers.includes(text[i])) {
      text = text.replace(text[i], numbersText[parseInt(text[i])]);
    }
  }

  console.log(text);
}

numberToText(text);
