// destructuing assignment

//array destructuring
let numbers = [10,20,30,40,50]
let [num1, num2, num3, num4, num5] = numbers;
console.log(numbers[0])
console.log(num1)
console.log(num2)

let [x, y, ...z] = numbers;
console.log(z)

//swapping variables
let m=10, n=5;
[m,n] = [n,m];
console.log(m);
console.log(n);

//object destructuring
// const student1 = {
//     id : 101,
//     fullName : 'Anisul Islam',
//     gpa : 3.92
// }

// //we can also set default values of an object that does not exist
// let {id, fullName, gpa, country = 'Bangladesh'} = student1

// console.log(fullName)
// console.log(country)


//nested object destructuring
const student2 = {
    id : 101,
    fullName : 'Anisul Islam',
    gpa : 3.92,
    languages : {
        native : 'Bangla',
        beginner : 'Finnish'
    }
}
let {fullName, gpa, languages} = student2
console.log(fullName)
console.log(languages.native)


// destructuring function arguments
// const studentDetails = (studentInfo) => {
//     console.log(`${studentInfo.firstName} ${studentInfo.roll} ${studentInfo.dob}`)
// }

const studentDetails = ({firstName, roll, dob}) => {
    console.log(`${firstName} ${roll} ${dob}`)
}

const studentInfo = {
    dob : '12/03/90',
    roll : 101,
    firstName : 'Anisul'
}

studentDetails(studentInfo)