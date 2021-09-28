// Object -> key, value pair
const tutorials = {
  html: 32,
  css: 48,
  js: 60,
  jquery: 8,
  bootstrap: 25,
  react: 15,
  java: 155,
};

// printing the object
console.log(tutorials);

// accessing object property
console.log(tutorials.html);

// changing the property value
tutorials.html = 33;
console.log(tutorials.html);

// add new property
tutorials.node = 5;
console.log(tutorials.node);

// check object has a property
console.log("tutorial has property html: " + tutorials.hasOwnProperty("html"));

// how to access nested object
let studentInfo = {
  id: 101,
  personalInfo: {
    phone: {
      mobile: "01710444700",
      home: "01710",
    },
  },
};
console.log(studentInfo.personalInfo.phone.home);

// bracket notation for accessing property
// you can use it when property is unknown
const subjectName = "c plus plus";
tutorials[subjectName] = 65;
console.log(tutorials);

const addProperty = (property, value) => {
  tutorials[property] = value;
};

addProperty("python", 65);
console.log(tutorials);

// iterate through an object with for ... in
for (const key in studentInfo) {
  console.log(`${key} = ${studentInfo[key]}`);
}

const students = {
  karim: {
    age: 25,
  },
  rahim: {
    age: 35,
  },
  sagor: {
    age: 30,
  },
  nehal: {
    age: 29,
  },
};

// find out all the students whose age is less than 30 using for in loop
const checkAge = (std) => {
  for (const x in std) {
    if (std[x].age <= 30) {
      console.log(x);
    }
  }
};
checkAge(students);

// how to get all the keys of an object inside in an array
console.log(Object.keys(students));
