// try {
//   let result = add(10, 20);
//   console.log(result);
// } catch (error) {
//   console.log(error.name, error.message);
//   // switch (error.name) {
//   //   case 'ReferenceError':

//   // }
// } finally {
//   console.log("123");
// }

// console.log("Bye");

// let message = "Hi";

// const test = () => {
//   console.log(this);
// };

// test();

// function say() {
//   var message = "Hello";
//   console.log(message); // locale scope
//   console.log(this);
// }

// say();

// if (true) {
//   // let message = "123";
//   var message = "234";
//   // block scope
// }

// console.log(message); // global scope

// console.log(counter); // undefined
// counter = 1;
// console.log(counter); // 1
// let counter; // Temporal Dead Zone - TDZ

console.log(this);

const dev = {
  firstName: "Diyorbek",
  lastName: "Olimov",
  fullName() {
    console.log(this);
    return this.firstName + " " + this.lastName;
  },
};

console.log(dev.fullName());
