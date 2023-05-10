//! 1-TASK

function checkTitle(title) {
  let arr = title.split(" ");
  let result;

  for (let i = 0; i < arr.length; i++) {
    result =
      arr[i].charCodeAt(0) >= 65 && arr[i][0].charCodeAt(0) <= 90
        ? true
        : false;
  }
  console.log(result);
}

// checkTitle("Water is transparent");

//! 2-TASK

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        counter++;
      } else {
        counter;
      }
    }
  }

  console.log(counter);
}

// countVowels("Celebration");

//! 3-TASK

function findLargestNums(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(Math.max(...arr[i]));
  }

  console.log(result);
}

// findLargestNums([
//   [0.4321, 0.7634, 0.652],
//   [1.324, 9.32, 2.5423, 6.4314],
//   [9, 3, 6, 3],
// ]);

//! 4-TASK
function formatPhoneNumber(numbers) {
  let spliced = numbers.splice(0, 3);
  let spliced2 = numbers.splice(0, 3);
  let withComma = "(" + spliced.join("") + ")";

  console.log(withComma + " " + spliced2.join("") + "-" + numbers.join(""));
}

// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]);

//! 5-TASK

function isSymmetrical(num) {
  let arrNum = num.toString().split(""),
    reversed = arrNum.reverse().join("");

  console.log(num.toString() === reversed);
}

isSymmetrical(12321);
