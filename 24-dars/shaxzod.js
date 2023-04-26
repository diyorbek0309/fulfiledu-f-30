// 4-masalaSizga number (yil) turiga kiruvchi va string (oy nomi) turiga kiruvchi 2 ta o’zgaruvchi berilgan.
// Sizning vazifangiz berilgan oy nomiga bog’liq ravishda shu oydagi kunlar sonini chiqarib berishdan iborat.
// Bu masalani yechishda switch / case statementdan foydalanishingiz kerak. Kabisa yilini ham hisobga oling!

function findDaysOfMonths(yil, oy) {
  let kunlarsoni;
  switch (oy) {
    case "yanvar":
    case "mart":
    case "may":
    case "iyun":
    case "avgust":
    case "oktabr":
    case "dekabr":
      kunlarsoni = 31;
      break;
    case "aprel":
    case "iyul":
    case "sentyabr":
    case "noyabr":
      kunlarsoni = 30;
      break;
    case "fevral":
      if ((yil % 4 == 0 && yil % 100 != 0) || yil % 400 == 0) {
        kunlarsoni = 29;
      } else {
        kunlarsoni = 28;
      }
      break;
    default:
      console.log("Noto'g'ri oy nomi kiritdingiz");
  }

  console.log(`${oy} oyida ${kunlarsoni} kun bor`);
}
findDaysOfMonths(1600, "fevral");
findDaysOfMonths(1700, "fevral");

// 24-dars topshiriqlari
// 1-masala 1 dan n gacha bolgan sonlar orasida faqat juft sonlarni consolega chiqaradigan funksiya yozing.n funksiya parametri

// 1-yechim
function findEvenNumbers(n) {
  const evenNumbers = [];
  for (let i = 2; i <= n; i += 2) {
    evenNumbers.push(i);
  }
  console.log(evenNumbers);
}
// findEvenNumbers(29);

// 2-yechim
function findEven(n) {
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  for (let x of numbers) {
    if (x % 2 === 0) {
      console.log(x);
    }
  }
}
// findEven(28);

// 2-masala.1225 ga qoldiqsiz bolinadigan dastlabgi n ta sonni topadigan funksiya yarating.n funksiya parametri
// function findNumbers(n){
//     const nums = []
//     for(let i=1; i<=1225;i++){
//         if (1225%i===0){
//             nums.push(i)
//         }
//     }
//     console.log(nums);
// }
// findNumbers(7)

// 3-masala  1-yechim
function buildTriangle(n) {
  const sonliroyhatlar = [];
  for (let i = 1; i <= n; i++) {
    const sonliroyhat = [];
    for (let j = 1; j <= i; j++) {
      sonliroyhat.push(j);
    }
    sonliroyhatlar.push(sonliroyhat);
  }

  for (let i = 0; i < sonliroyhatlar.length; i++) {
    let sonliroyhat = sonliroyhatlar[i];
    let triangle = "";
    for (let j = 0; j < sonliroyhat.length; j++) {
      triangle += sonliroyhat[j] + " ";
    }
    console.log(triangle);
  }
}
// buildTriangle(4);

// 2-yechim
function makeTriangle(n) {
  let natija = "";
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      natija += j + " ";
      console.log(++count);
    }
    natija += "\n";
  }
  console.log(natija);
}

makeTriangle(10);
