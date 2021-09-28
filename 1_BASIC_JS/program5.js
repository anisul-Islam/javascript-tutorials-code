// string related library functions
// length, prompt(), chartAt(5),
// string.toUpperCase(), string.toLowerCase()
// string1.concat(string2)
// string.slice(0,3)

// getting the input from user as string
var text = prompt("Enter your name : ");
document.write("Your name : " + text + "<br/>");

//finding the length of a string
var len = text.length;
document.write("Number of characters : " + len + "<br/>");

// finding the character at a specific position
document.write(text.charAt(2) + "<br/>");

// converting the string into uppercase or lowercase
document.write(text.toUpperCase() + "<br/>");
document.write(text.toLowerCase() + "<br/>");

// concatenation function
var text1 = " hi";
var text2 = "bye";
var text3 = text1.concat(text2);
document.write(text3 + "<br/>");

// slice function
var text4 = "hello";
var result = text4.slice(0, 2);
document.write(result + "<br/>");

//collected from w3school
var x = new String("John");
var y = new String("John");

// (x === y) is false because x and y are different objects

/*
There are 3 methods for extracting a part of a string:
    slice(start, end)
    substring(start, end)
    substr(start, length)


1) slice can take positive and negative parameter. 
    If a parameter is negative, the position is counted from the end of the string.
    
    var str = "Apple, Banana, Kiwi";
    var res = str.slice(-12, -6); // output - Banana

    var str = "Apple, Banana, Kiwi";
    var res = str.slice(7); // output - Banana, Kiwi


2) substring() is similar to slice().
    The difference is that substring() cannot accept negative indexes.
    var str = "Apple, Banana, Kiwi";
    var res = str.substring(7, 13); // output - Banana


3)substr() is similar to slice().
    The difference is that the second parameter specifies the length of the extracted part.
    var str = "Apple, Banana, Kiwi";
    var res = str.substr(7, 6); // output - Banana 
*/
