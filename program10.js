// Relational Operator : >, >=, <, <=, ==, ===, !=, !==
// Logical Operator : &&, ||, !

// Relational and logical operators return true / false

var num1 = 20;
var num2 = 10;
var num3 = "10";
var num4 = 20;
var num5 = 15;

console.log(num1 > num2)
console.log(num1 >= num2)
console.log(num1 < num2)
console.log(num1 <= num2)
console.log(num1 == num4)
console.log(num1 != num4)
console.log(num1 === num3)
console.log(num1 !== num3)


// logical operators helps us to compine multiple conditions
console.log(num1 > num2 && num1 > num5)
console.log(num1 > num2 || num1 > num5)