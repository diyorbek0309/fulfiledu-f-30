// const fruits = ["olma", "olcha", "behi"];
// // const fruits = new Array("olma", "olcha", "behi");

// const languages = ["js", "java", "go"];

// languages[1] = "swift";

// console.log(languages); // ['js', 'swift', 'go']
// console.log(fruits.length);

// let laptops = ["Asus", "HP"];

// let age = 22;

// if (age >= 16) {
//   console.log("Siz pasport olgansiz!");
// } else {
//   console.log("Siz pasport olmagansiz!");
// }

// console.log(age >= 16 ? "Siz pasport olgansiz!" : "Siz pasport olmagansiz!");

// 1 - junior
// 2 yoki 3 - middle
// 4 yoki undan katta - senior
// let experience = 12;

// if (experience === 0 || experience === 1) {
//   console.log("Siz Juniorsiz!");
// } else if (experience === 2 || experience === 3) {
//   console.log("Siz Middlesiz!");
// } else {
//   console.log("Siz Seniorsiz!");
// }

// let level =
//   experience === 0 || experience === 1
//     ? "Siz Juniorsiz!"
//     : experience === 2 || experience === 3
//     ? "Siz Middlesiz!"
//     : "Siz Seniorsiz!";

// console.log(level);

function isEvenOrOdd(num) {
  // if (num % 2 === 0) {
  //   console.log("Juft");
  // }
  // console.log("Toq");

  console.log(num % 2 ? "Toq" : "Juft");
}

isEvenOrOdd(10);

// falsy values: undefined, null, 0, false, [], ...
