//** 4. Sizga number (yil) turiga kiruvchi va string (oy nomi) turiga kiruvchi 2 ta o’zgaruvchi berilgan. Sizning vazifangiz berilgan oy nomiga bog’liq ravishda shu oydagi kunlar sonini chiqarib berishdan iborat. Bu masalani yechishda switch / case statementdan foydalanishingiz kerak. Kabisa yilini ham hisobga oling!

//! Task - 1

function daysOfMonth(month, year) {
  let text = "";
  let day = 0;
  if (year > 0 && !(year % 1)) {
    switch (month) {
      case "January":
      case "March":
      case "May":
      case "July":
      case "August":
      case "October":
      case "December":
        day = 31;
        break;
      case "April":
      case "June":
      case "September":
      case "November":
        day = 30;
        break;
      case "February":
        // if (year % 4 === 0) {
        //   day = 29;
        // } else {
        //   day = 28;
        // }
        day = year % 4 === 0 ? 29 : 28;
        break;
      default:
        day = -1;
    }
  } else {
    day = -1;
  }

  if (day === -1) {
    text = "Data entry error";
  } else {
    text = `There are ${day} days in ${month} ${year} `;
  }

  return text;
}

// console.log(daysOfMonth("February", 2020));

//* 1. 1 dan n gacha bo’lgan sonlar orasida faqat juft sonlarni consolega chiqaradigan funksiya yarating. n funksiyaga parameter sifatida beriladi.

//! Task - 2

// function onlyEven(n) {
//   if (n > 1 && !(n % 1)) {
//     for (let i = 2; i <= n; i += 2) {
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//     }
//   } else console.log("1 dan katta natural son kiriting!");
// }

// onlyEven(2.5);

//* 2. 1225 ga qoldiqsiz bo’linadigan dastlabki n ta sonni topuvchi funksiya yarating. n funksiyaga parameter sifatida beriladi.

//! Task - 3

// function divisorOf1225(x) {
//   if (x > 0) {
//     for (let i = 1; i <= x; i++) {
//       if (1225 % i === 0) {
//         console.log(i);
//       }
//     }
//   } else {
//     console.log("Musbat son kiriting");
//   }
// }

// divisorOf1225(10);

//! Task - 4

function triangleNumbers(n) {
  if (n > 0) {
    let space = "";
    for (let i = 1; i <= n; i++) {
      space += i + " ";
      // 1
      // 1 2 
      // 1 2 3
      // 1 2 3 4
      console.log(space);
    }
  } else {
    console.log("musbat son kiriting");
  }
}
// triangleNumbers(10);

//! Task - 4+

function triangleNumbers2(n) {
  let width = 2 * n - 1,
    center = Math.floor(width / 2),
    str = "";

  for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < width; j++) {
      if (j < center - i || j > center + i) {
        str += " ";
      } else {
        str += "*";
      }
    }
    console.log(str);
  }
}

triangleNumbers2(5);
