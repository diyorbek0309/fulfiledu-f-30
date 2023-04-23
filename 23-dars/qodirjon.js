//! 1. Sizga number turiga kiruvchi o’zgaruvchi berilgan bo’lsin. Ushbu o’zgaruvchi qiymati 16 dan kichik yoki teng bo’lsa, consolega *O’quvchi*, 16 dan katta 25 dan kichik bo’lsa, console *Talaba*, 25 dan katta 60 dan kichik bo’lsa consolega *Ishchi* va 60 dan katta bo’lsa consolega *Nafaqaxo’r* deb chiqarib beruvchi dastur tuzing.

function human(a) {
  if (a <= 16) {
    return "O'quvchi";
  } else if (a > 16 && a < 25) {
    return "Talaba";
  } else if (a >= 25 && a < 60) {
    return "Ishchi";
  } else if (a >= 60) {
    return "Nafaqaxo'r";
  }
}

// console.log(human(25));

const human2 = (a) =>
  a <= 16
    ? "O'quvchi"
    : a > 16 && a < 25
    ? "Talaba"
    : a >= 25 && a < 60
    ? "Ishchi"
    : "Nafaqaxo'r";

// console.log(human2(59));

//! 2. Sizga number turiga kiruvchi 3 ta o’zgaruvchi berilgan bo’lsin. Ushbu o’zgaruvchilardan qaysi ikkitasini yig’indisi eng katta bo’lishini aniqlab, shu ikkita o’zgaruvchi va ularning yig’indisini consolega chiqaruvchi dastur tuzing.

function maxSum(a, b, c) {
  const arr = [a, b, c].sort();
  console.log(arr);

  console.log(arr[1] + " and " + arr[2]);
  console.log("Max Sum =", arr[1] + arr[2]);
}

maxSum(120, -150, 10);
