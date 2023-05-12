// ==> 28-dars Hayotillo <==

/* 1-vazifa 
Check if a string title is a title string or not.
A title string is one which has all the words in the
string start with a upper case letter. */

// function checkTitle(title) {
//     const splittedItem = title.split(" ")
//     let isUpperCase = true
//     splittedItem.forEach((text) => {
//         if (text[0] !== text[0].toUpperCase()){
//             isUpperCase = false
//         }
//     })
//     return isUpperCase
// }

// console.log(checkTitle("A Mind Boggling Achievement")); // ➞ true
// console.log(checkTitle("A Simple Java Script Program!")); // ➞ true
// console.log(checkTitle("Water is transparent")); // ➞ false



/* 2-vazifa

Create a function that takes a string and returns the number
(count) of vowels contained within it. */

// const unli ="auioe"

// const countVowels = (str) => {
// 	let count = 0
//     for(let i = 0 ; i < str.length; i++){
//         if (unli.includes(str[i])){
//         count++
//     }}
//     return count
// }


// console.log(countVowels("Celebration")); // ➞ 5

// console.log(countVowels("Palm")); // ➞ 1

// console.log(countVowels("Prediction")); // ➞ 4

// console.log(countVowels("Hayotillo")); // ➞ 4





/* 3-vazifa

Create a function that takes an array of arrays with numbers. Return a new (single) array
with the largest numbers of each.*/

// const findLargestNums = (arr) => {
// 	let newArr =[];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i].sort((a, b) => b - a)[0])
//     };

//     return newArr;
// }

// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); // ➞ [7, 90, 2]

// console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ); // ➞ [-34, -2, 7]

// console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])); // ➞ [0.7634, 9.32, 9]


/* 4-vazifa

Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string
of those numbers formatted as a phone number (e.g. (555) 555-5555).*/


// const formatPhoneNumber = (num) => {
//     num.splice(0,0, "(")
//     num.splice(4,0, ")")
//     num.splice(5,0, " ")
//     num.splice(9,0, "-")
//     num.toString()
//     let phoneNumber = num.join("")
//     return phoneNumber

// }

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // ➞ "(123) 456-7890"

// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); // ➞ "(519) 555-4468"

// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); // ➞ "(345) 501-2527"

// console.log(formatPhoneNumber([8, 9, 3, 4, 4, 2, 5, 0, 4, 1])); // ➞ "(893) 442-5041"


/* 5-vazifa

Create a function that takes a number as an argument and returns true or false depending
on whether the number is symmetrical or not. A number is symmetrical when it is the same
as its reverse.*/

// const isSymmetrical = (num) => {
//     return num === Number(num.toString().split("").reverse().join(""));
// }

// console.log(isSymmetrical(7227)); // ➞ true
// console.log(isSymmetrical(12567)); // ➞ false
// console.log(isSymmetrical(44444444)); // ➞ true
// console.log(isSymmetrical(9939)); // ➞ false
// console.log(isSymmetrical(1112111)); // ➞ true





// ==> 29-dars Hayotillo <==

/* 6-vazifa

Create a function that takes a number as an argument. Add up all the numbers from 1 to
the number you passed to the function. For example, if the input is 4 then your function
should return 10 because 1 + 2 + 3 + 4 = 10.*/

// const addUp = (num) => {
//     let sum = 0
//     for(let i = 0; i <= num; i++){
//         sum += i
//     }
//     return sum
// }

// console.log(addUp(4)); // ➞ 10

// console.log(addUp(13)); // ➞ 91

// console.log(addUp(600)); // ➞ 180300

/* 6-vazifa 
Create a function that takes a number as an argument and returns the highest digit in
that number.*/

const highestDigit = (num) => {
    
    numString = num.split("");
    let result = +(Math.max(numString))

    // for (let i = 1; i < numString.length; i++){
    //     if (num[0] < num[i]) {
    //         result = num[i]
    //     }
    // }
    return result
}


console.log(highestDigit(379)); // ➞ 9

// console.log(highestDigit(2)); // ➞ 2

// console.log(highestDigit(377401)); // ➞ 7