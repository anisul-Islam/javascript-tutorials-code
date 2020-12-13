// for vs foreach

// var numbers = [10,20,30,40];
// for(var x=0; x<numbers.length; x++)
// {
//     console.log(numbers[x]);
// }

// var numbers = [10,20,30,40];
// numbers.forEach(function(x){
//     console.log(x)
// })

// var numbers = [10,20,30,40];
// var squareNumbers = [];
// numbers.forEach(function(x){
//     squareNumbers.push(x*x);
// })
// console.log(squareNumbers)

var numbers = [10,20,30,40];
console.log(numbers)
numbers.forEach(function(x,index,arr){
    arr[index] = x+5;
})
console.log(numbers)

