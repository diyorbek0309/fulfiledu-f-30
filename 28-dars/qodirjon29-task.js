//! 1-TASK

const addUp = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};

// console.log(addUp(600));

//! 2-TASK

const highestDigit = (num) => Math.max(...num.toString().split(""));

// console.log(highestDigit(502426));

//! 3-TASK
//* To'g'ri ishlamadi
// function isPandigital(num) {
//   const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   let arrNum = num.toString().split("");

//   let result = false;

//   numbers.find((element) => {
//     for (let i = 0; i < arrNum.length; i++) {
//       if (element === arrNum[i]) {
//         result = true;
//         console.log("ishladi");
//       }
//     }
//   });

//   console.log(result);
// }

// isPandigital(123456789123);

// const isPandigital = (n) => {
//   let a = n.toString();
//   let b = true;
//   console.log(a);
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j <= 10; j++) {
//       if (a[i] !== j.toString()) {
//         b = false;
//       }
//     }
//   }
//   return b;
// };

// console.log(isPandigital(1234560789));
// console.log(isPandigital(90864523148909));
// console.log(isPandigital(1122334406778899));
