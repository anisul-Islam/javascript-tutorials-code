// callback function and higher order function
// using callback we can make our code non blocking

/*
const printSquare = (x) => {
  console.log(`The square is ${x * x}`);
};

const square = printSquare;
square(10);

const higherOrderFunction = (y, callback) => {
  callback(y);
};

higherOrderFunction(5, square);
*/

// event handlers are good example of callback functions , they will allow delay
// document.getElementById('button').addEventListener('click', () => {
//     //item clicked
//   })

// window.addEventListener('load', () => {
//     //window loaded
//     //do what you want
//   })

// setTimeout(() => {
//     // runs after 2 seconds
//   }, 2000)

const taskOne = (callback) => {
  console.log(`Task 1`);
  callback();
};

const taskTwo = (callback) => {
  setTimeout(() => {
    console.log(`Task 2`);
    callback();
  }, 2000);
};

const taskThree = (callback) => {
  console.log(`Task 3`);
  callback();
};
const taskFour = () => {
  console.log(`Task 4`);
};

// taskOne(function t1() {
//   taskTwo(function t2() {
//     taskThree(function t3() {
//       taskFour();
//     });
//   });
// });
taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      taskFour();
    });
  });
});
