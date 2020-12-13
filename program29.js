//Create, remove, add html element

// creating html element and adding to a div
var firstDiv = document.querySelector("#first-div");
console.log(firstDiv)

var heading3 = document.createElement("h3");
var text = document.createTextNode("This is heading 3");
heading3.appendChild(text);
firstDiv.appendChild(heading3);

var heading5 = document.createElement("h5");
var text = document.createTextNode("This is heading 5");
heading5.appendChild(text);
firstDiv.appendChild(heading5);

// remove element
firstDiv.removeChild(heading5);

//adding element before
var heading6 = document.createElement("h6");
var text = document.createTextNode("This is heading 6");
heading6.appendChild(text);
firstDiv.insertBefore(heading6, heading3);
// firstDiv.insertAfter(heading6, heading3);
