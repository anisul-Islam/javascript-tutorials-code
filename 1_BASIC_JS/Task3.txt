/* Program for Task 3*/
// A program that calculates addition, subtraction, multiplication, division and remainder of 2 numbers

//declaring all the variables
var num1, num2, sum, sub, mul, div, rem;

// getting num1 and num2 and also converting them into Integer. REMEMBER the default data type of prompt is String
num1 = parseInt(prompt("Enter First Number : "))
num2 = parseInt(prompt("Enter Second Number : "))

// we could convert it like following
// num1 = parseInt(num1, 10)

//calculating the sum and then printing the result
sum = num1 + num2
document.write("Addition = " + sum + "<br/>")

//calculating the sub and then printing the result
sub = num1 - num2
document.write("subtraction = " + sub + "<br/>")

//calculating the multiplication and then printing the result
mul = num1 * num2
document.write("Multiplication = " + mul + "<br/>")

//calculating the division and then printing the result
div = num1 / num2
document.write("Division = " + div + "<br/>")

//calculating the remainder and then printing the result
rem = num1 % num2
document.write("Remainder = " + rem + "<br/>")
