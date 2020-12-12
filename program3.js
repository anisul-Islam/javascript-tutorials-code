////you can run this program by using the command =>   node program3 .js

// understanding variables
// variables naming rules (collected from w3school)
/*
    The general rules for constructing names for variables (unique identifiers) are:
    Names can contain letters, digits, underscores, and dollar signs.
    Names must begin with a letter
    Names can also begin with $ and _ (but we will not use it in this tutorial)
    Names are case sensitive (y and Y are different variables)
    Reserved words (like JavaScript keywords) cannot be used as names

*/
// printing student details
// variable can be declared first and then initialize
// var name, age, cgpa, lineBreak;
// name = "Anisul Islam";
// age = 29;
// cgpa = 3.92;
// lineBreak = "<br/>";

var name = "Anisul Islam";
var age = 29;
var cgpa = 3.92;
var lineBreak = "<br/>";

// variable can be declared and initialize at the same time
// var name = "Anisul Islam",age = 29,cgpa = 3.92,lineBreak = "<br/>"


document.write("Name : " + name + lineBreak);
document.write("Age : " + age + lineBreak);
document.write("CGPA : " + cgpa + lineBreak);