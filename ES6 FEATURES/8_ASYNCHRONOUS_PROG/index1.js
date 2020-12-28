// sync vs async

// example of synchronous js
// js is single threaded, synchronous programming language.
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
console.log("------------------------------------");
console.log("Example of Synchronous programming");
console.log(`Task 1`);
console.log(`Task 2`);
console.log(`Task 3`);
console.log(`Task 4`);
console.log("------------------------------------\n\n");
// setTimeout() is an asynchronous function
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
// setTimeout() will move the task into web APIs where the task will be running in background
// other task will continue in call stack
// when the call stack is completely empty then task (callback functions) from web APIs will be moved to task queue (FIFO)
// when the entire call stack is empty then from task queue task will moved to call stack and the process is done

console.log("Example of Asynchronous programming");
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
    console.log("------------------------------------");
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
