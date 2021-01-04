// //you can run this program by using the command =>   node program7 .js

// Arithmetic operator -> +, -, *, / , %, ++, --, ** (exponentiation)
// Assignment operator -> =, +=, -=, *=, /=, %=

var num1 = parseInt(prompt("Enter first number : "));
var num2 = parseInt(prompt("Enter second number : "));
var lineBreak = "<br/>"

var result = num1 + num2
document.write("The sum is : " + result + lineBreak);

result = num1 - num2
document.write("The sub is : " + result + lineBreak);

result = num1 * num2
document.write("The multiplication is : " + result + lineBreak);

result = num1 / num2
document.write("The division is : " + result + lineBreak);

result = num1 % num2
document.write("The remainder is : " + result + lineBreak);