//you can run this program by using the command =>   node program2.js

// keywords -> reserved words for specific reasons. example -> for,while, do while, if, else, else if, break, try,catch, function, var, const, let etc.
// data type -> string, number (int,float,double), boolean, object. use typeof() to check the data type
// comment -> single line comment, double line comment


//This is a single line comment

/*
This is 
multiple line
comment
*/

console.log(typeof (123));
console.log(typeof (123.5));
console.log(typeof ("123"));
console.log(typeof (true));
console.log(typeof (false));


//collected from w3school's website
var car;    // Value is undefined, type is undefined 
var car = "";    // The value is "", the typeof is "string"

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;   // Now both value and type is undefined