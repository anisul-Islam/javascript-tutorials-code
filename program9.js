//Temperature converter

var farn = parseFloat(prompt("Enter Fahrenheit = "));
var cels = (farn - 32) * (5 / 9);
document.write("Celsius = " + cels + "<br/>");


// var cels = parseFloat(prompt("Enter Celsius = "));
// var farn = (cels * (9 / 5)) + 32;
// document.write("Fahrenheit = " + farn);