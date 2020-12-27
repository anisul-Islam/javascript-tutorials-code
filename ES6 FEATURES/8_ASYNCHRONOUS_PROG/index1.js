// sync vs async

// example of synchronous js
// js is single threaded, synchronous programming language.
// it has blocking behaviour

// console.log(`Task 1`);
// console.log(`Task 2`);
// console.log(`Task 3`);
// console.log(`Task 4`);

// example of non blocking js using setTimeout() asynchronous function
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
// setTimeout() will move the task into web APIs where the task will be running in background
// other task will continue in call stack
// when the call stack is completely empty then task (callback functions) from web APIs will be moved to call-queue (FIFO)

// console.log(`Task 1`);
// setTimeout(() => {
//   console.log(`Task 2`);
// }, 2000);
// console.log(`Task 3`);
// console.log(`Task 4`);

const taskOne = () => {
  console.log(`Task 1`);
};

const taskTwo = () => {
  setTimeout(() => {
    console.log(`Task 2`);
  }, 2000);
};

const taskThree = () => {
  console.log(`Task 3`);
};
const taskFour = () => {
  console.log(`Task 4`);
};

taskOne();
taskTwo();
taskThree();
taskFour();
