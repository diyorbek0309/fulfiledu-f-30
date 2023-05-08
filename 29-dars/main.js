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

console.log(add(1)(2)(3));
