// How to change HTML Elements  (collected from W3School website)
// element.innerHTML =  new html content ->	Change the inner HTML of an element
// element.attribute = new value 	-> Change the attribute value of an HTML element
// element.style.property = new style ->	Change the style of an HTML element


// finding element by ID
var h2 = document.getElementById("heading2");

// changing elements text, id
h2.innerHTML = "I love Bangladesh";
h2.id = "heading2-new";
console.log(h2);

var a = document.querySelector("a");
console.log(a)
a.textContent="visit my website";
a.href="http://www.studywithanis.com"

// changing style of element
a.style.textDecoration = "none";
a.style.color = "green";
a.style.fontSize = "2rem";


