// Array methods
// you have already learned about pop(),push(),concat()
// shift(), unshift(), splice(pos,noe,ele1,ele2..), splice(start,end), slice(4) 
// sort(), reverse()

var names = ["Mina","Rabeya","Kolpona","Anis"];
console.log(names);

// // shift opposite of pop
// names.shift();
// console.log(names);

// // unshiftt opposite of push
// names.unshift("Sagor");
// console.log(names);

// adding elements using splice
// names.splice(2,1,"Karim","Rahim");
// console.log(names);

// removing elements using splice
// names.splice(1,2);
// console.log(names);

// slice 
// var newArray = names.slice(1);
// console.log(newArray)
// console.log(names)

// var sortedNames = names.sort();
// names.reverse();
// console.log(sortedNames)

var numbers = [20, 5, 25, 45, 1];
numbers.sort(function(a,b){
    return b-a;
});
console.log(numbers)





