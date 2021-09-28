// Array methods
// find() returns the value of the first array element that passes certain condition
let numbers = [5, 55, 30, 40, 50];

const evenNumbers = (value, index, array) => {
  if (value % 2 === 0) {
    return value;
  }
};

let newNumbers = numbers.find(evenNumbers);
// let newNumbers = numbers.find(x => x>25)
console.log(newNumbers);

// findIndex() returns the index of the first array element that passes certain condition
console.log(numbers.findIndex(evenNumbers));

const students = [
  {
    id: 101,
    gpa: 3.5,
  },
  {
    id: 102,
    gpa: 2,
  },
  {
    id: 103,
    gpa: 4.5,
  },
  {
    id: 104,
    gpa: 5,
  },
];

console.log(students.find((x) => x.gpa > 4));
