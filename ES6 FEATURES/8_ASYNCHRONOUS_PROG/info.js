// example of synchronous js
// js is single threaded, synchronous programming language.
// it has blocking behaviour
/*
console.log("wake up");
console.log("Get fresh");
console.log("start breakfast");
console.log("finish breakfast");
console.log("Read Newspaper");
console.log("Check social media");

*/

// example of non blocking js using setTimeout() asynchronous function
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
// setTimeout() will move the task into web APIs where the task will be running in background
// other task will continue in call stack
// when the call stack is completely empty then task (callback functions) from web APIs will be moved to call-queue (FIFO)
/*
console.log("wake up");
console.log("Get fresh");
console.log("start breakfast");

setTimeout(() => {
  console.log("finish breakfast1");
}, 2000);
setTimeout(() => {
  console.log("finish breakfast2");
}, 2000);
console.log("Read Newspaper");
console.log("Check social media");

*/

//call back and higher order functions
const addNumbers = (num1, num2) => {
  return num1 + num2;
};

// const x = addNumbers()
// x()

const addNumbers2 = (x, anotherFunction) => {
  return anotherFunction(x, 10);
};

console.log(addNumbers(2, 3));
console.log(addNumbers2(2, addNumbers));
