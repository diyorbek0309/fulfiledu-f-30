// ==> 1-vazifa <==

let age = 17;

// Ternary operatori yordamida

age <= 16 ? console.log("O'quvchi") : 
age <= 25 ? console.log("Talaba") :
age <= 60 ? console.log("Ishchi") :
            console.log("Nafaqaxo'r");

// if / else if / else statement yodamida

if (age <= 16) {
    console.log("O'quvchi")
} else if (age <= 25) {
    console.log("Talaba")
} else if (age <= 60) {
    console.log("Ishchi")
} else {
    console.log("Nafaqaxo'r")
}


// ==> 2-vazifa <==

function sum (num1, num2, num3) {
    if (num1 + num2 > num2 + num3) {
        console.log(`${num1} va ${num2}`, `javobi ${num1 + num2}`)
    } else if (num2 + num3 > num1 + num2){
        console.log(`${num2} va ${num3}`, `javobi ${num2 + num3}`)
    } else if (num1 + num3 > num2 + num3) {
        console.log(`${num1} va ${num3}`, `javobi ${num1 + num3}`)
    } else {
        console.log(`Siz bir biriga o'xshsh sonlar kirittingiz`)
    }
}

sum(3,4,5)

sum(5,2,1)

sum(1,2,5)

sum(7,2,5)

sum(7,9,5)

sum(4,3,4)

sum(4,4,9)