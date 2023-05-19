// console.log(window);
// console.log(document);

// const text = document.getElementById("text");
// const fruits = document.getElementsByClassName("fruit");
// const fruits2 = document.getElementsByTagName("li");

// console.log(fruits, fruits2);

// const anor = document.querySelector(".list li:nth-child(2) > strong");
// const mevalar = document.querySelectorAll(".list li:nth-child(2) > strong");
// const text = document.querySelector("#text");
// console.log(text.innerHTML);
// console.log(text.innerText);

// let ul = document.getElementsByTagName("ul"); // [ul]
// let ul = document.querySelector("ul"); // ul
// let li = document.createElement("li"); // <li></li>
// li.innerHTML = "<i>Gilos</i>"; // <li>Gilos</li>

// ul.appendChild(li);
// ul.remove();

// const html = document.querySelector("html");
// html.setAttribute("lang", "en");
// html.removeAttribute("lang");
// console.log(html.getAttribute("lang"));

// Problems
// Add up the Numbers from a Single Number

const addUp = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
};

// console.log(addUp(4));

// Highest Digit

const highestDigit = (num) =>
  num
    .toString() // "3401"
    .split("") // ["3", "4", "0", "1"]
    .map((item) => +item) // [3, 4, 0, 1]
    .sort() // [0, 1, 3, 4]
    .pop(); // 4

// console.log(highestDigit(3401));

// Tuck in Array

const tuckIn = (arr1, arr2) => {
  let result = [arr1[0]];

  for (let i = 0; i < arr2.length; i++) {
    result[i + 1] = arr2[i];
  }

  result.push(arr1[1]);

  return result;
};

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

// Sort by String Length

const sortByLength = (arr) => {
  return arr.sort((a, b) => a.length - b.length);
};

// console.log(sortByLength(["a", "ccc", "dddd", "bb"]));

// Sort the Unsortable

const sortIt = (arr) => arr.sort();

// console.log(sortIt([[3], 4, [2], [5], 1, 6]));
