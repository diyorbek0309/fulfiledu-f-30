// console.log("Start");

// console.log("Middle");
// let middleTimeout = setTimeout(() => {
//   console.log("Middle 0");
// }, 0);

// setTimeout(() => {
//   console.log("Middle 1");
// }, 1);

// console.log("End");

// Natija:
// Start;
// Middle;
// End;

// let testInterval = setInterval(() => {
//   console.log("It works!");
// }, 1000);

// // console.log(testInterval);
// setTimeout(() => {
//   clearInterval(testInterval);
// }, 10000);

// clearTimeout(middleTimeout);

// function getUsers(callback) {
//   setTimeout(() => {
//     callback([
//       { username: "john", email: "john@test.com" },
//       { username: "jane", email: "jane@test.com" },
//     ]);
//   }, 3000);
// }

// function findUser(username) {
//   getUsers((users) => {
//     const user = users.find((user) => user.username === username);
//     console.log(user);
//   });
// }

// findUser("john");

// const promise = new Promise((resolve, reject) => {
//   // return the state
//   if (success) {
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve([
//           { username: "john", email: "john@test.com" },
//           { username: "jane", email: "jane@test.com" },
//         ]);
//       } else {
//         reject("Error!");
//       }
//     }, 1000);
//   });
// }

// getUsers()
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Done!");
//   });

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("Error!");
      }
    }, 1000);
  });
}

const findUsers = async (username) => {
  try {
    const users = await getUsers();
    console.log(users);
  } catch (error) {
    console.log(error);
  }

  // console.log(users.find((user) => user.username === username));
};

findUsers("jane");
