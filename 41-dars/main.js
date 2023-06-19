// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   getArea() {
//     return Math.PI * this.radius * this.radius;
//   }

//   getPerimeter() {
//     return 2 * Math.PI * this.radius;
//   }
// }

// let q = new Circle(4.44);
// console.log(q.getArea());
// console.log(q.getPerimeter());

// function getDays(date1, date2) {
//   console.log((date2 - date1) / (3600 * 24000));
// }

// const months = { January: 31, February: 28, March: 31 };

// getDays(new Date("December 29, 2018"), new Date("January 1, 2019"));

// function product() { }

// product(1, 2)(1, 1)(2, 3);

// function getFrequencies(arr) {
//   const result = {}
//   if (arr.length === 0) {
//     return result;
//   } else {
//     for (const i of arr) {
//       if (result.hasOwnProperty(i)) {
//         result[i]++;
//       } else {
//         result[i] = 1;
//       }
//     }

//     return result;
//   }
// }

// console.log(getFrequencies(["A", "B", "A", "A", "A"]));

// Sizga n natural soni beriladi. Rekursiv funksiyadan foydalanib, n gacha bo'lgan natural sonlar yig'indisini hisoblang.

// function recursiveSum(n) {
//   if (n === 1) return 1; // exit condition

//   return n + recursiveSum(n - 1); // 5 + 4 + 3 + 2 + 1; 
// }

// console.log(recursiveSum(5));