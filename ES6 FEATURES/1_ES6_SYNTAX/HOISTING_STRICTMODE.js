// collected form w3school website
// In JavaScript, a variable can be declared after it has been used.
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

fullName = "Anisul Islam";
console.log(fullName);
var fullName; // valid

x = 25;
console.log(x);
let x; // reference error

y = 10;
console.log(y);
const y; // syntax error

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
"use strict";
x = 3.14;       // This will cause an error because x is not declared