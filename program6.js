//you can run this program by using the command =>   node program6 .js

var number = 20;
console.log(typeof(number))

number = toString(20);
console.log(typeof(number))

var x = 2.56789;
// number of characters after the decimal point
console.log(x.toFixed(1))
console.log(x.toFixed(2))


// total number of characters including the decimal point
console.log(x.toPrecision(1))
console.log(x.toPrecision(2))


console.log(Number(true))
console.log(Number(false))
console.log(Number(" 10"))
console.log(Number(" 10 "))
console.log(Number("10.25"))



