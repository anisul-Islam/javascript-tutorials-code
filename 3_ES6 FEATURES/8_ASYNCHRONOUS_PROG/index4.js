// promise, promise chaining, async await
console.log("welcome");
const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1 is completed");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 2 is completed");
    }, 2000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    reject("task 3 is not completed");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task 4 is completed");
  });
};

// taskOne()
//   .then((res) => console.log(res))
//   .then(taskTwo)
//   .then((res) => console.log(res))
//   .then(taskThree)
//   .then((res) => console.log(res))
//   .then(taskFour)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const callAllTasks = async () => {
  try {
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
  } catch (e) {
    console.log(e);
  }
};

callAllTasks();

console.log("bye");
