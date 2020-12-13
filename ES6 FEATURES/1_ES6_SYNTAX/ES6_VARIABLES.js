// Intro to ES6
// ECMAScript 2015 (ES6) has introduced 2 new keywords for variable declaration: let and const.
// block scope, redecalre is allowed for var but not for let and constant, 

var x = 20;
var x = 30; // redeclare is allowed but for let and const it is not possible

let y = 10;

if(true){
    let y = 20; // this y is only valid inside this if block
    console.log("Inside if let y = "+y)
}
console.log("Outside if let y = "+y)

const c = 20;
c = 25; // it is not valid, you can not change const variable value, but for var and let it is possible