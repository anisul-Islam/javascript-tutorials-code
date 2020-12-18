// Object Literal

// Object property initializer shorthand - ES6 allows to eliminate the duplication 
function studentInfo1(name, age){
    return {
        name : name,
        age : age
    }
}
function studentInfo2(name, age){
    return {
        name,
        age
    }
}

console.log(studentInfo1("Rokibul Islam", 27));
console.log(studentInfo2("Anisul Islam", 30));


// Concise method syntax
// previous
let message1 = {
    body : function(){
        return (`Eid is always special day for us.`);
    }
}
console.log(message1.body())

// present one
let message2 = {
    body(){
       return (`Eid is always special day for us.`);
    }
}
console.log(message2.body())

let message3 = {
    'body name'(){
       return (`Eid is always special day for us.`);
    }
}
console.log(message3['body name']())