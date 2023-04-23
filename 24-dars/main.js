const numbers = [21, 34, 76, 87, 43, 98];

for (let i = 0; i < numbers.length; i = i + 1) {
  // i - iterator
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
    // break;
    continue;
  }
}

// const person = { fname: "Diyorbek", lname: "Olimov" };
// let text = "";

// for (let key in person) {
//   text = text + person[key];
// }

// console.log(text);

// const cars = ["BMW", "Volvo", "Mini"];
// let text = "";

// for (let x of cars) {
//   text += x;
//   console.log(text);
// }
