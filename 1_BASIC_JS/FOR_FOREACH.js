var numbers = [10,20,30]

//for loops
for(let x=0; x<numbers.length; x++){
    console.log(numbers[x])
}

// using for each loop
numbers.forEach(myFunction);
function myFunction(item){
    console.log(item)
}


numbers.forEach(function(item){
    console.log(item)
});


var sqaureNumbers = []
numbers.forEach(function(item){
    sqaureNumbers.push(item * item)
})
console.log(sqaureNumbers);


numbers.forEach(function(item, index, arr){
    arr[index] = item + 5;
});
console.log(numbers)