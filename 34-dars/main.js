// const dev1 = {
//   firstName: "Diyorbek",
//   age: "22",
//   laptop: {
//     ram: 16,
//     brand: "Asus",
//     rom: 512,
//   },
// };

// const nums1 = [1, 2, 3, 4, 5];
// const nums2 = [...nums1];
// console.log(nums2);

// const dev2 = Object.assign({}, dev1); // shallow copy
// const dev2 = { ...dev1 }; // spread operator - shallow copy
// const dev2 = JSON.parse(JSON.stringify(dev1));
// dev2.firstName = "Akbar";
// dev2.laptop.brand = "Lenovo";

// console.log(dev1, dev2);

// const odd = [1, 3, 5];
// const combined = [2, ...odd, 4, 6];

// console.log(combined);

// function add() {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   console.log(sum);
// }

const add = (a, b, ...nums) => {
  // rest parameter
  let total = nums.reduce((acc, cur) => acc + cur, 0);

  console.log(a, b, total);
};

// add(3, 4, 5, 6, 7, 8, 9, 34);

// Destructuring

// const dev1 = {
//   firstName: "Diyorbek",
//   age: "22",
//   laptop: {
//     ram: 16,
//     brand: "Asus",
//     rom: 512,
//   },
// };

// const { age } = dev1;
// const {
//   laptop: { brand, ram, rom },
// } = dev1;

// console.log(brand, ram, rom);

// let numbers = [3, 4, 5, 6, 7];

// let [uch, turt, besh, olti] = numbers;
// console.log(uch, turt, besh, olti);

const dev1 = {
  firstName: "Diyorbek",
  lastName: "Olimov",
  age: "22",
  laptop: {
    ram: 16,
    brand: "Asus",
    rom: 512,
  },
  hello: () => {
    console.log("Assalomu aleykum!"); // method
  },
  get getFullName() {
    return dev1.firstName + " " + dev1.lastName;
  },
  set setName(ism) {
    dev1.firstName = ism;
  },
  set setAge(yosh) {
    if (typeof yosh === "string") {
      dev1.age = yosh;
    }
  },
};

// dev1.hello();
dev1.setName = "Akbar";
dev1.setAge = 23;
const fullName = dev1.getFullName;
// console.log(fullName, dev1);
