"use strict"

//example of default parameter
function message(text='Hello Everyone') {
    console.log(text);
}
message(); 
message("love js es6");



//example of rest parameter
function printNumbers(x,y, ...z){
    console.log(`x = ${x}, y = ${y}, z= ${z}`)
}
printNumbers(10,20,30,40,50);

