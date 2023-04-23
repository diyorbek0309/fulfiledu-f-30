// *age* int tipidagi o'zgaruvchilar
age = prompt("Yoshingizni kiriting : ");

//Ustoz kodni oddiy  sahifaga ulash kerak edi propt ishlashi uchun node da  topdim tunish qiyin bo'ldi

//ustoz kod o'qilishga qiyin desangiz yoyib yozaman  hozir kod kamligiga bir satirlik kod qilgandim .😊
if (age <= 16) {
  console.log("O'quvchi");
} else if (age > 16 && age <= 25) {
  console.log("Talaba");
} else if (age > 25 && age <= 60) {
  console.log("Ishchi");
} else if (age > 60) {
  console.log("Nafaqaxo'r");
}
