// synchronous vs asynchronous
// callback
// promise
// async await

// promise chaining

console.log("starting the program");

const taskOne = new Promise((resolve, reject) => {
  let completedTaskOne = true;
  if (completedTaskOne) {
    const task1Text = "completed task1";
    resolve(task1Text);
  } else {
    reject(new Error("not completed task1"));
  }
});

const taskTwo = () => {
  const task2Text = "completed task2";
  return Promise.resolve(task2Text);
};

const taskThree = () => {
  const task3Text = "completed task3";
  return Promise.resolve(task3Text);
};
const taskFour = () => {
  const task4Text = "completed task4";
  return Promise.resolve(task4Text);
};

taskOne
  .then((response) => {
    console.log(response);
  })
  .then(taskTwo)
  .then((response) => {
    console.log(response);
  })
  .then(taskThree)
  .then((response) => {
    console.log(response);
  })
  .then(taskFour)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));

console.log("ending the program");
