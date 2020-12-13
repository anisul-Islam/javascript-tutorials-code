// Adding & removing css style in js

// step 1 : create index.html and add a h1 element
// setp 2 : create a style.css file and add some style inside a class called heading-style
// step 3 : create a js file and use the code from this file
// step 4 : link css and js file to your index.html file


var h1 = document.querySelector("h1");
console.log(h1)

//add style
h1.classList.add('heading-style')


//removing style
h1.classList.remove('heading-style')