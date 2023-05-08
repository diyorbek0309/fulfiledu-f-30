//2-masala. 10 ta raqamdan iborat (0 dan 9 gacha) massivni oladigan va telefon raqami sifatida formatlangan raqamlar qatorini qaytaradigan funksiya yarating (masalan, (555) 555-5555).

/* son = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number1 = "";
number2 = "";
number3 = "";
function phoneNumber(son) {
  for (let i = 0; i < 3; i++) {
    number1 += son[i];
    number2 += son[i + 3];
    number3 += son[i + 6];
    info = "(" + number1 + ") " + number2 + "-" + number3;
  }
  console.log(info);
}
phoneNumber(son); //www*/

//4-masala. Satr sarlavhasi sarlavha qatori yoki yo'qligini tekshiring. Sarlavha qatori - bu satrdagi barcha so'zlar katta harf bilan boshlanadigan.

/* str1 = "A Mind Boggling Achievement Sghghgh fgfggfgf";
array = [
  "A",
  "E",
  "I",
  "O",
  "U",
  "Y",
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
son = 0;
//console.log(newArray);
function checkTitle(str1) {
  newArray = str1.split(" ");
  for (let i = 0; i < newArray.length; i++) {
    const arr = newArray[i];
    for (let i = 0; i < array.length; i++) {
      if (arr.includes(array[i])) {
        son += 1;
      } else {
      }
    }
  }
  if (newArray === son) {
    console.log(true);
  } else {
    console.log(false);
  }
  //console.log(son);
}

checkTitle(str1); // www */

//5-masala.Satrni oladigan va undagi unlilar sonini (sonini) qaytaruvchi funksiya yarating.

/* text = "Celebration";
son = 0;
vowels = ["a", "i", "e", "u", "o", "y"];
function countVowels(text) {
  for (let i = 0; i < text.length; i++) {
    if (text.includes(vowels[i])) {
      son += 1;
    }
  }
  console.log(son);
}

countVowels(text);  //w */
