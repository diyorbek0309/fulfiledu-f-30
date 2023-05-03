// 1-tpshiriq

function drop(arr, val = 1) {
  return arr.slice(val);
}

// 2-topshiriq

function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) arr[i] = arr[i] + 1;
  return arr;
}

// 3-topshiriq

function findIndex(arr, str) {
  return arr.indexOf(str);
}

// Shahzod

const arry = [1, 10, 2, 2, 1];
const newSetArry = new Set(arry);
const uniqNumbersArry = Array.from(newSetArry);

function findUniqNumber() {
  let sumArry = 0;
  for (let i = 0; i < arry.length; i++) {
    sumArry += arry[i];
  }

  let sumUniqnumbers = 0;
  for (let i = 0; i < uniqNumbersArry.length; i++) {
    sumUniqnumbers += uniqNumbersArry[i];
  }

  console.log(2 * sumUniqnumbers - sumArry);
}

// findUniqNumber();

// Sizga butun sonlar to'plami berilgan. To'plamda bitta elementdan tashqari barchasini jufti bor. To'plamdagi yagona jufti bo'lmagan yolg'iz elementni toping.

// const nums = [1, 2, 3, 4, 1, 3, 2];

// function findUniqueNumber(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let counter = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j] && i !== j) {
//         counter++;
//       }
//     }
//     if (counter === 1) {
//       console.log(nums[i]);
//       break;
//     }
//   }
// }

// findUniqueNumber(nums);

// function findUniqueNumber(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j] && i !== j) {
//         delete nums[i];
//         delete nums[j];
//       }
//     }
//   }

//   return nums.find(function (item) {
//     if (typeof item === "number") {
//       return item;
//     }
//   });
// }

// function drop(arr, val = 1) {
//   // if (arr.length < val) {
//   //   return [];
//   // }

//   arr.splice(0, val);
//   return arr;
// }

// console.log(drop([1, 2, 3], 5));

// function incrementItems(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i]++;
//   }
//   return arr;
// }

// console.log(incrementItems([0, 1, 2, 3]));

function findIndex(arr, str) {
  // return arr.findIndex(function (item) {
  //   return item === str;
  // })
  return arr.indexOf(str);
}

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

function sum(arr) {
  // let sum = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  let sum = arr.reduceRight(function (total, item) {
    console.log(item, total);
    return total + item;
  }, 0);

  console.log(sum);
}

// sum([4, 12, 45, 23]);
