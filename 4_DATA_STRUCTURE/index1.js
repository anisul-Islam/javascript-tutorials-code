// Array
let demoArray = ["Anisul Islam", 3.92, null, true, undefined, { name: "anis" }];
console.log(demoArray);

//length of an array
console.log(demoArray.length);

// accessing array element
console.log(demoArray[2]);

// check an item exist or not
console.log(demoArray.indexOf(3.92));

// adding single or multiple items to the starting of an array
demoArray.unshift("England");
// demoArray.unshift("England", "Pakistan");
console.log(demoArray);

// adding items to the ending of an array
demoArray.push("Finland");
// demoArray.push("Finland", "Canada");
console.log(demoArray);

// removing single or multiple items to the starting of an array
demoArray.shift("England");
// demoArray.shift("England", "Pakistan");
console.log(demoArray);

// removing items to the ending of an array
demoArray.pop("Finland");
// demoArray.pop("Finland", "Canada");
console.log(demoArray);

// remove items using splice
demoArray.splice(1, 2);
console.log(demoArray);

// Add items using splice - startIndex, NumberOfItemsToDelete, item / items)
demoArray.splice(0, 1, 2);
console.log(demoArray);

// copy an array using spread operator
let array1 = [4, 5, 6];
let array2 = [1, 2, 3, ...array1];
console.log(array2);

let matrix = [
  [1, 2],
  [3, 4],
];

console.log(matrix[0][1]);
