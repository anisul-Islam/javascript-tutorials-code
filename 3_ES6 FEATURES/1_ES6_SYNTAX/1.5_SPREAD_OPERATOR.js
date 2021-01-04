"use strict"


// Remember spread operator and rest parameter have same syntax (...) the three dots
// spread operator unpack elements where rest parameters pack elements into an array
// example collected from MDN website
function sum(x, y, z) {
    return x + y + z;
}
let numbers = [1, 2, 3];
// console.log(sum(...numbers)); // expected output: 6


//creating a new array (we could use push but spread operator is a good solution here)
let allNumbers1 = [4,5, ...numbers];
// console.log(`${allNumbers1}`)

// spread operator can be used anywhere but rest parameters can be placed only as last argument of a function
let allNumbers2 = [4,...numbers, 5];
let allNumbers3 = [...numbers, 4, 5];

// concatenate arrays
let oddNumbers = [1,3,5,9]
let evenNumbers = [2,4,6,8,10]
// we could use concat method oddNumbers.concat(evenNumbers)
let totalNumbers = [...oddNumbers, ...evenNumbers]
// console.log(`Total Numbers = ${totalNumbers}`)


// copy an array
let copyArray = [...totalNumbers]
// console.log(`copyArray = ${copyArray}`)

// string and spread operator
let chars = ['A', 'B', ...'anisul', 'z'];
// console.log(`${chars}`)


// spread operator and object concatenation
let personInfo1 = { name: 'Anisul Islam', age: 30 };
let personInfo2 = { id: '101', nationality: "bd" };

let p1 = { ...personInfo1 };
// console.log(p1)

let p2 = { ...personInfo1, ...personInfo2 };
console.log(p2)
