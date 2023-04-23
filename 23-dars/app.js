// 2. Sizga number turiga kiruvchi o’zgaruvchi berilgan bo’lsin. Ushbu o’zgaruvchi qiymati 16 dan kichik yoki teng bo’lsa, consolega *O’quvchi*, 16 dan katta 25 dan kichik bo’lsa, console *Talaba*, 25 dan katta 60 dan kichik bo’lsa consolega *Ishchi* va 60 dan katta bo’lsa consolega *Nafaqaxo’r* deb chiqarib beruvchi dastur tuzing.

function showLife(age) {
  if (age < 0) {
    console.log("Yosh kiritishda xatolik!!😒");
  } else if (age <= 16) {
    console.log("O'quvchi");
  } else if (age <= 25) {
    console.log("Talaba");
  } else if (age <= 60) {
    console.log("Ishchi");
  } else {
    console.log("Nafaqaxo'r");
  }
}

showLife(15);

// 3. Sizga number turiga kiruvchi 3 ta o’zgaruvchi berilgan bo’lsin. Ushbu o’zgaruvchilardan qaysi ikkitasini yig’indisi eng katta bo’lishini aniqlab, shu ikkita o’zgaruvchi va ularning yig’indisini consolega chiqaruvchi dastur tuzing.

function showMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3 && num2 > num3) {
    console.log(num1 + num2, num1, num2);
  } else if (num1 > num2 && num1 > num3 && num3 > num2) {
    console.log(num1 + num3, num1, num3);
  } else if (num2 > num1 && num2 > num3 && num1 > num3) {
    console.log(num2 + num1, num1, num2);
  } else if (num2 > num1 && num2 > num3 && num3 > num1) {
    console.log(num2 + num3, num3, num2);
  } else if (num3 > num1 && num3 > num2 && num2 > num1) {
    console.log(num2 + num3, num3, num2);
  } else {
    console.log(num1 + num3, num3, num1);
  }
}

// showMax(5, 7, 4);
