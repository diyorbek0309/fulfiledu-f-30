// ALISHER SHERALIYEV
// Vazifa 1

function checkTitle(text) {
  const textArr = text.split(" ");
  let count = 0;
  textArr.forEach((word) => {
    if (word[0] !== word[0].toUpperCase()) {
      count++;
    }
  });
  console.log(count ? false : true);
}

// checkTitle("A Mind Boggling Achievement");
// checkTitle("A Simple Java Script Program!");
// checkTitle("Water is transparent");

// Vazifa 2

function countVowels(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) count++;
  }
  console.log(count);
}

// countVowels("Celebration");
// countVowels("Palm");
// countVowels("Prediction");

// Vazifa 3
function findLargestNums(arr) {
  const maxNums = [];
  arr.forEach((a) => {
    maxNums.push(Math.max(...a));
  });
  console.log(maxNums);
}

// findLargestNums([
//   [4, 2, 7, 1],
//   [20, 70, 40, 90],
//   [1, 2, 0],
// ]);
// findLargestNums([
//   [-34, -54, -74],
//   [-32, -2, -65],
//   [-54, 7, -43],
// ]);
// findLargestNums([
//   [0.4321, 0.7634, 0.652],
//   [1.324, 9.32, 2.5423, 6.4314],
//   [9, 3, 6, 3],
// ]);

// Vazifa 4
function formatPhoneNumber(arr) {
  console.log(
    `"(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
      .slice(6)
      .join("")}" `
  );
}

// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]);
// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]);

// Vazifa 5
function isSymmetrical(num) {
  console.log(String(num).split("").reverse().join("") === String(num));
}

isSymmetrical(7227);
isSymmetrical(12567);
isSymmetrical(44444444);
isSymmetrical(9939);
isSymmetrical(1112111);
