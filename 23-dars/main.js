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

// isEvenOrOdd(10);

// falsy values: undefined, null, 0, false, [], ...

// let numberOfDay = 3;

// switch (numberOfDay) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;
//   default:
//     console.log("Bunday hafta kuni yo'q!");
// }

// Ismatulla

function categoryByAge(age) {
  if (age <= 16) {
    console.log("O'quvchi");
  } else if (age > 16 && age <= 25) {
    console.log("Talaba");
  } else if (age > 25 && age <= 60) {
    console.log("Ishchi");
  } else if (age > 60) {
    console.log("Nafaqaxo'r");
  } else {
    console.log("please enter other amount");
  }
}

// categoryByAge();

// 3rd task

function biggestSum(num1, num2, num3) {
  let largest = num1;
  let secondLargest = num2;
  if (num2 > largest) {
    secondLargest = largest;
    largest = num2;
  } 

  if (num3 > largest) {
    secondLargest = largest;
    largest = num3;
  } else if (secondLargest < num3) {
    secondLargest = num3;
  }
  console.log(largest + secondLargest);
}
biggestSum(21, 3, 4);
