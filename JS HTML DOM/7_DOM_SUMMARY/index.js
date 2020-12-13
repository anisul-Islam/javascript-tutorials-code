//finding an element
var link = document.getElementsByTagName("a")[0];
        
//changing the HTML Content
link.innerHTML = "Visit Google";

//changing the value of an attribute
link.href = "https://www.google.com";

//changing HTML style
link.style.color = "red";


// Creating New HTML Elements (Nodes)
//To add a new element to the HTML DOM, 
// you must create the element (element node) first, 
// and then append it to an existing element. 

//creating the element
var heading3 = document.createElement("h3");

//To add the text we have to create a text node
var node = document.createTextNode("This is heading 2");

// append the text node to the element
heading3.appendChild(node);

// Finally you must append the new element to an existing element.
var div1 = document.getElementById("div1");
div1.appendChild(heading3);


// creating element using insertBefore()
var para = document.createElement("p");
var paraText = document.createTextNode("this is a paragraph");
para.appendChild(paraText);

var heading2 = document.getElementsByTagName("h1")[1];
div1.insertBefore(para, heading2);


// remove a child node
var child = document.getElementsByTagName("h1")[0];
div1.removeChild(child);

//replacing HTML Element
var newChild = document.createElement("p");
var textNode = document.createTextNode("replaced paragraph");
newChild.appendChild(textNode);
div1.replaceChild(newChild,para);

//Node List is a collection of document nodes


//classList - add, remove, toggle, contains
document.querySelector("ul").classList.add("hi");
document.querySelector("ul").classList.remove("ulClass");
var x = document.querySelector("ul").classList.contains("hi");
console.log(x);