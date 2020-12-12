// string related library functions
// length, prompt(), chartAt(5), 
// string.toUpperCase(), string.toLowerCase()
// string1.concat(string2)
// string.slice(0,3)


// getting the input from user as string
var text = prompt("Enter your name : ");
document.write("Your name : " + text + "<br/>")

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