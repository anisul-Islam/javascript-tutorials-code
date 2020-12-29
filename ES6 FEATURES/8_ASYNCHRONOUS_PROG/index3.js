// Promise, Promise.all() , Promise.race()
console.log("starting the program");

// const taskOne = (personName) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         {
//           personName: personName,
//         },
//         1000
//       );
//     });
//   });
// };
const taskOne = (personName) => {
  return new Promise((resolve, reject) => {
    resolve(
      {
        personName: personName,
      },
      1000
    );
  });
};

const taskTwo = (person) => {
  return new Promise((resolve, reject) => {
    console.log(`details of ${person.personName}`);

    resolve(
      {
        age: 29,
        phone: 040675,
      },
      2000
    );
  });
};
// const taskTwo = (person) => {
//   return new Promise((resolve, reject) => {
//     console.log(`details of ${person.personName}`);
//     setTimeout(() => {
//       resolve(
//         {
//           age: 29,
//           phone: 040675,
//         },
//         2000
//       );
//     });
//   });
// };

// taskOne("Anisul Islam")
//   .then(taskTwo)
//   .then((response) => {
//     console.log(response);
//   });

// const taskThree = () => {
//   const task3Text = "completed task3";
//   return Promise.resolve(task3Text);
// };
// const taskFour = () => {
//   const task4Text = "completed task4";
//   return Promise.resolve(task4Text);
// };

Promise.all([taskOne, taskTwo]).then((res) => console.log(res));
Promise.all([taskOne, taskTwo]).then(([res1, res2]) =>
  console.log("Results : ", res1, res2)
);

// Promise.race([taskOne, taskTwo, taskThree]).then((result) =>
//   console.log(result)
// );
console.log("ending the program");
