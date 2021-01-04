// forEach , map, filter

var numbers = [22,31,4,5,35,26,78]
var squareNumbers = numbers.map(function(x){
   return x*x;
})
console.log(squareNumbers)


var numbers = [22,31,4,5,35,26,78]
var newNumbers = numbers.filter(function(x){
   return x>10;
})
console.log(newNumbers)
