/* Program for Task 6*/
// A program that will find sum of all numbers from 1 to 100 that are divisible by 3 and 5 

var sum = 0
var i = 1
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum = sum + i
    }
    i = i + 1
}
document.write("sum is : " + sum)
