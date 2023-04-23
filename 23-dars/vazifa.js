// 2-vazifa Sizga number turiga kiruvchi o’zgaruvchi berilgan bo’lsin. Ushbu o’zgaruvchi qiymati 16 dan kichik yoki teng bo’lsa, 
// consolega O’quvchi, 16 dan katta 25 dan kichik bo’lsa, console Talaba, 25 dan katta 60 dan kichik bo’lsa consolega Ishchi va 
// 60 dan katta bo’lsa consolega Nafaqaxo’r deb chiqarib beruvchi dastur tuzing. 
function findProfession(age){
    if (age > 0 && age <= 16){
        console.log("O'quvchi");
    }else if(age > 16 && age <=25 ){
        console.log("Talaba");
    }else if(age >25 && age <=60){
        console.log("Ishchi");
    }else{
        console.log("Nafaqaxo'r");
    }
}
findProfession(26)
// 3-vazifa Sizga number turiga kiruvchi 3 ta o’zgaruvchi berilgan bo’lsin. Ushbu o’zgaruvchilardan qaysi ikkitasini 
// yig’indisi eng katta bo’lishini aniqlab, shu ikkita o’zgaruvchi va ularning yig’indisini consolega chiqaruvchi dastur tuzing. 
function findMaxSum(num1, num2, num3) {
    const sums = [num1 + num2, num1 + num3, num2 + num3]
    if (sums[0] === sums[1] && sums[1] === sums[2]) {
        console.log("Bu yerda barcha sonlar bir biriga teng ")
        console.log(`eng katta yigindi ${sums[0]}`)
    } else if (sums[0] === sums[1] || sums[0] === sums[2] || sums[1] === sums[2]) {
        if (sums[0] === sums[1]) {
            if (num2 > num1) {
                console.log(`Bu yerda ikkita bir xil son kelgan va ${num2} ${num1} dan katta `)
                console.log(`Eng katta yigindi shu ikkala ${num2} sonlarining yigindisiga teng: ${num2 + num3}`)
            } else {
                console.log(`Bu yerda ${num1} qolgan ikkita oxshash sonlardan katta`)
                console.log(`Eng katta yigindi ${num1 + num2}`)
            }
        }else if(sums[0] === sums[2]){
            if (num3 > num2) {
                console.log(`Bu yerda ikkita bir xil son kelgan va ${num3} ${num2} dan katta `)
                console.log(`Eng katta yigindi shu ikkala ${num3} sonlarining yigindisiga teng: ${num1 + num3}`)
            } else {
                console.log(`Bu yerda ${num2} qolgan ikkita oxshash sonlardan katta`)
                console.log(`Eng katta yigindi ${num2+ num3}`)
            }
        }else if(sums[1] === sums[2]){
             if (num1 > num3) {
                console.log(`Bu yerda ikkita bir xil son kelgan va ${num1} ${num3} dan katta `)
                console.log(`Eng katta yigindi shu ikkala ${num1} sonlarining yigindisiga teng: ${num1 + num2}`)
            } else {
                console.log(`Bu yerda ${num3} qolgan ikkita oxshash sonlardan katta`)
                console.log(`Eng katta yigindi ${num1 + num3}`)
            }
        }
    } else if (sums[0] > sums[1] && sums[0] > sums[2]) {
        console.log(`${num1} va ${num2} sonlarning yigindisi eng katta va yigindi ${sums[0]} ga teng `)
    } else if (sums[1] > sums[0] && sums[1] > sums[2]) {
        console.log(`${num1} va ${num3} sonlarning yigindisi eng katta va yigindi  ${sums[1]} ga teng `)
    } else {
        console.log(`${num2} va ${num3} sonlarning yigindisi eng katta va yigindi ${sums[2]} ga teng `)
    }
}

findMaxSum(6,2,6)
