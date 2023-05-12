//* =======================  30 - task  ======================= *\\

//! 1

const tuckIn = (arr1, arr2) => {
  return [arr1[0], ...arr2, arr1[1]];
};

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

// console.log(
//   tuckIn(
//     [
//       [1, 2],
//       [5, 6],
//     ],
//     [[3, 4]]
//   )
// );

//! 2

const sortByLength = (arr) => {
  return arr.sort((a, b) => a.length - b.length);
};

// console.log(sortByLength(["may", "april", "september", "august"]));

// console.log(sortByLength([]));

//! 3

const sortIt = (arr) => {
  return arr.sort((a, b) => a - b);
};

// console.log(sortIt([[3], 4, [2], [5], 1, 6]));
