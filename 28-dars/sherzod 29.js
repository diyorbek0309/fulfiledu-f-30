//1-masala. Pandigital raqam kamida bir marta barcha raqamlarni (0-9) o'z ichiga oladi. Butun sonni qabul qiladigan funksiya yozing, agar butun son pandigital bo'lsa, rost, aks holda noto'g'ri bo'ladi.

/* let arrs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
nums = 1234567890;
newArr = [];
function isPandigital(nums) {
  newArr = nums.toString().split("");
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    const arr = newArr[i];
    for (let j = 0; j < arrs.length; j++) {
      const arr1 = arrs[j];
      if (arr.includes(arr1[j])) {
        console.log("true");
      } else {
        console.log("false");
      }
    }
  }
}

isPandigital(nums); //??? */

//2-masala. Argument sifatida raqamni oladigan va shu sondagi eng yuqori raqamni qaytaradigan funksiya yarating
/* 
let number = 129357;
let newArr = [];
function highestDigit(nums) {
  const newArr = nums.toString().split("");
  //console.log(newArr);
  let arrMax = newArr[0];
  for (let i = 1; i < newArr.length; i++) {
    if (arrMax < newArr[i]) {
      arrMax = newArr[i];
    }
  }
  //console.log(newArr);
  console.log(arrMax);
}

highestDigit(number);
 */

//3-masala. Argument sifatida raqamni oladigan funksiya yarating. 1 dan funktsiyaga o'tgan raqamgacha bo'lgan barcha raqamlarni qo'shing. Misol uchun, agar kirish 4 bo'lsa, sizning funktsiyangiz 10 ni qaytarishi kerak, chunki 1 + 2 + 3 + 4 = 10.
/* 
function addUp(son) {
  let s = 0;
  for (let i = 1; i <= son; i++) {
    s = s + i;
  }
  console.log(s);
}

addUp(600); //www
 */
