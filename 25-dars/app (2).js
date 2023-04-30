//*****  ALISHER SHERALIYEV *****//

// VAZIFA 1
// Berilgan arrayning eng katta va eng kichik elementlarini topuvchi funksiya yarating. Tayyor min, max metodlardan foydalanish mumkin emas!

// Input: [34, 12, 76, 87, 43]
// Output: 12, 87

function showMinMaxNumber(arr) {
  let minNum = arr[0];
  let maxNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    }
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }

  console.log(minNum, maxNum);
}

// const arr = [34, 12, 76, 87, 43];
// showMinMaxNumber(arr);

// ************************************************** //

// VAZIFA 2
// Tekst tarkibidagi raqamlarni so'z bilan yozib beradigan funksiya yarating

// Input: 3 boshli ajdarho
// Output: uch boshli ajdarho

function numberToWord(text) {
  const numbers = [
    "nol",
    "bir",
    "ikki",
    "uch",
    "to'rt",
    "besh",
    "olti",
    "yetti",
    "sakkiz",
    "to'qqiz",
  ];

  let newArr = [];
  for (let x of text.split(" ")) {
    if (Number(x)) {
      x = numbers[Number(x)];
    }
    newArr.push(x);
  }
  console.log(newArr.join(" "));
}

// numberToWord("3 boshli ajdarho");

// VAZIFA 3.1
// Sizga butun sonlar to'plami berilgan. To'plamda bitta elementdan tashqari barchasini jufti bor. To'plamdagi yagona jufti bo'lmagan yolg'iz elementni toping

// Input: [1, 2, 3, 4, 3, 2, 1]
// Output: 4

function findSingleNum(arr) {
  let singleNum = "";
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count == 0) {
      singleNum = arr[i];
      count = 0;
    }
  }

  console.log(singleNum);
}

// findSingleNum([1, 2, 3, 4, 3, 2, 1]);

// VAZIFA 3.2
// Sizga butun sonlar to'plami berilgan. To'plamda bitta elementdan tashqari barchasini jufti bor. To'plamdagi yagona jufti bo'lmagan yolg'iz elementni toping

// Input: [1, 2, 3, 4, 3, 2, 1]
// Output: 4

function findSingleNum2(arr) {
  let singleNum = arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
  console.log(singleNum);
}

// findSingleNum2([1, 2, 3, 4, 3, 2, 1]);
