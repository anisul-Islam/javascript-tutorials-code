// conditional control statement -> if, else if, else, switch

// a program that will find a large number between 2 numbers
var num1 = parseInt(prompt("Enter first numebr : "));
var num2 = parseInt(prompt("Enter second numebr : "));

// first method using only if
if (num1 > num2) {
    console.log("Large Number is : " + num1);
}
if (num1 < num2) {
    console.log("Large Number is : " + num2);
}
if (num1 == num2) {
    console.log("Equal numbers");
}

// second method, more efficient than first method
if (num1 > num2) {
    console.log("Large Number is : " + num1);
} else if (num1 < num2) {
    console.log("Large Number is : " + num2);
} else if (num1 == num2) {
    console.log("Equal numbers");
}

// third method, more efficient than first and second method
if (num1 > num2) {
    console.log("Large Number is : " + num1);
} else if (num1 < num2) {
    console.log("Large Number is : " + num2);
} else {
    console.log("Equal numbers");
}