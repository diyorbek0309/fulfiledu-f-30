// ****   ALISHER SHERALIYEV **** //

// Vazifa 1 //
// 4. Sizga number (yil) turiga kiruvchi va string (oy nomi) turiga kiruvchi 2 ta o’zgaruvchi berilgan. Sizning vazifangiz berilgan oy nomiga bog’liq ravishda shu oydagi kunlar sonini chiqarib berishdan iborat. Bu masalani yechishda switch / case statementdan foydalanishingiz kerak. Kabisa yilini ham hisobga oling!

function isLeapYear(year) {
  return true ? (year % 400 === 0 || year % 100 !== 0) && year % 4 == 0 : false;
}

function showNumberOfMonth(year, month) {
  const months = {
    yanvar: 31,
    fevral: isLeapYear(year) ? 29 : 28,
    mart: 31,
    aprel: 30,
    may: 31,
    iyun: 30,
    iyul: 31,
    avgust: 31,
    sentabr: 30,
    oktabr: 31,
    noyabr: 30,
    dekabr: 31,
  };

  switch (month) {
    case "yanvar":
      console.log(months.yanvar);
      break;
    case "fevral":
      console.log(months.fevral);
      break;
    case "mart":
      console.log(months.mart);
      break;
    case "aprel":
      console.log(months.aprel);
      break;
    case "may":
      console.log(months.may);
      break;
    case "iyun":
      console.log(months.iyun);
      break;
    case "iyul":
      console.log(months.iyul);
      break;
    case "avgust":
      console.log(months.avgust);
      break;
    case "sentabr":
      console.log(months.sentabr);
      break;
    case "oktabr":
      console.log(months.oktabr);
      break;
    case "noyabr":
      console.log(months.noyabr);
      break;
    case "dekabr":
      console.log(months.dekabr);
      break;
  }
}

showNumberOfMonth(2024, "fevral");

// Vazifa 2
// 1 dan n gacha bo'lgan sonlar orasida faqat juft sonlarni consolega chiqaradigan funksiya yarating. n funksiyaga parametr sifatida beriladi

function findEvenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Vazifa 3
// 1225 ga qoldiqsiz bo'linadigan dastlabki n ta sonni topuvchi funksiya yarating. n funksiyaga parametr sifatida beriladi

function findNum(n) {
  for (let i = 1225; i <= 1225 * n; i = i + 1225) {
    console.log(i);
  }
}

// Vaizfa 4

function triangleNumbers(n) {
  let row = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
    row = "";
  }
}

triangleNumbers(10);
