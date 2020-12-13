// Function example

// creating function without parameter
function message() {
    document.write("Hello, I am a function without parameter" + "<br/>");
}

// creating function with one parameter
function welcomeMessage(name) {
    document.write("welcome " + name + "<br/>");
}

// creating function with multiple parameters
function addition(num1, num2) {
    var sum = num1 + num2;
    document.write("addition is  " + sum + "<br/>");
}

// returning from a function
function square(num) {
    return num * num;
}


//calling functions
message();
welcomeMessage("Anisul Islam");
addition(2, 3);
document.write("square of 5 is  " + square(5) + "<br/>");