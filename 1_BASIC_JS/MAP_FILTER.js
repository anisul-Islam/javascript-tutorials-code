// forEach, map and filter


// forEach
const numbers = [1,2,3,4,5]
let sqaureNumbers = []
numbers.forEach(function(x){
    sqaureNumbers.push(x*x);
})
console.log("sqaureNumbers: "+sqaureNumbers)


// map function, it does not change the source array
let newSqaureArray = numbers.map(function(x){
    return x * x;
})
console.log("newSqaureArray : "+ newSqaureArray)


// filter function, it does not change the source array
let numbers3 = [2,25,9,78,10]
var filteredArray = numbers3.filter(function(x){
    return x > 10;
})
console.log("filteredArray : "+filteredArray)