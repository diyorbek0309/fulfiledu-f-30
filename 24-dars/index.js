// 1 dan n gacha bo'lgan sonlarni juftlarini chiqarish
// function oddNumbers(n){
//     for(let i = 1; i<=n;i++){
//         if(i % 2 == 0){
//             console.log(i)
//         }
//     }
// }
// oddNumbers(21)

// lesson 2 1225 soniga dastlabki n ta sonni topuvchi funksiya yaratish
// function residueNumber(n){
//     let number = 1225;
//     let count = 0;
//     let result
//     for(let i = 1; i <= 1225; i++){
//         if(number % i == 0 && count < n){
//             console.log(i);
//             count++
//         }

//     }
//     if(count < n){
//         console.log(`Afsuski 1225 soniga faqat ${count} ta raqam bo'linadi`);
//     }
// }

// residueNumber(10)

// lesson 3
function triangleNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let a = "";
    for (let j = 1; j <= i; j++) {
      a += " " + j;
    }
    console.log(a);
  }
}
// triangleNumbers(10);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let counter = "";
for (let i of num) {
  console.log((counter += i + " "));
}


