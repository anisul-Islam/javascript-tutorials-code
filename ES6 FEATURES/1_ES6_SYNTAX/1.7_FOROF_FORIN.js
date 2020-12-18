// for..of loop can iterate over iterable objects such as string, array, map, set etc.
const students = ["s1", "s2", "s3", "s4"];
for(let name of students){
    console.log(name)
}

// For loop through object we can use for/in loop
const students2 = {
name: "Anisul",
age: 25, 
cgpa : 3.75
}
for(let x in students2){ 
   console.log(x); //printing all the keys
    console.log(students2[x]); //printing all the values
}
