// JSON - JavaScript Object Notation, test.json
// You should already know the syntax -> {"key":"key_value"}
// JSON Receives Boolean, Number, String, Array, Object
// JSON.stringify() -> converts a JavaScript object or value to a JSON string
// JSON.parse(JSONDATA) -> converts a JSON string to  a JavaScript object or value

const studentInfo = {
  id: 101,
  name: "Anisul Islam",
  gpa: 3.92,
};
const studentInfoJSON = JSON.stringify(studentInfo);
console.log(studentInfoJSON);

const studentInfoJSObject = JSON.parse(studentInfoJSON);
console.log(studentInfoJSObject);
