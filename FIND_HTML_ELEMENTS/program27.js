// DOM -> Document Object Model
// Using DOM We can Find / get, change, add, or delete HTML elements.

// How to find HTML Elements 
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()


// finding element by ID
var h2 = document.getElementById("heading2");
console.log(h2)


// finding element by tagName
var h1 = document.getElementsByTagName("h1")[0];
console.log(h1)


// finding element by tagName
var p = document.getElementsByClassName("para")[0];
console.log(p)


// finding element by querySelector
var q1 = document.querySelector("#heading2");
console.log(q1)

//it will get the first element of the h1 elements
var q2 = document.querySelector("h1");
console.log(q2)

//it will get the first element of the para class
var q3 = document.querySelector(".para");
console.log(q3)

var list = document.querySelector(".my-div li");
console.log(list)

// finding element by querySelectorAll
var q4 = document.querySelectorAll(".para");
console.log(q4)

