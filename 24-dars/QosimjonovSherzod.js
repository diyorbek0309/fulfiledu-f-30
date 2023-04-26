//Topshiriq 1:

let months = "Fevral";
const year = 1704;

let output;
switch (months) {
  case "Yanvar":
    output = 31;
    break;
  case "Fevral":
    if (year % 4) {
      output = 28;
    } else {
      output = 29;
    }
    break;
  case "Mart":
    output = 31;
    break;
  case "Aprel":
    output = 30;
    break;
  case "May":
    output = 31;
    break;
  case "Iyun":
    output = 30;
    break;
  case "iyul":
    output = 31;
    break;
  case "Avgust":
    output = 31;
    break;
  case "Sentabr":
    output = 30;
    break;
  case "Oktabr":
    output = 31;
    break;
  case "Noyabr":
    output = 30;
    break;
  case "Dekabr":
    output = 31;
    break;
  default:
    output = "Oy nomini xato kiritdingiz!";
    break;
}
console.log(output);

//Topshiriq 2:

function showEvens(n) {
  for (let i = 2; i <= n; i = i + 2) {
    console.log(i);
  }
}

showEvens(1000);

//Topshiriq 3:

// for (let i = 1225; i < 91225; i = i + 1225) {
//     console.log(i);
// }

//Topshiriq 4:

// for (let i = 0; i <= 10; i++) {
//     console.log(1);
// }
// for (let i = 0; i < 10; i++) {
//     console.log(2);
// }
