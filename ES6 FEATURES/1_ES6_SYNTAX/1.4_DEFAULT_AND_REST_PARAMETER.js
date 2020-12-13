//example of default parameter
function message(text='Hello Everyone') {
    console.log(text);
}

message(); 
message("love js es6");

//example of rest parameter
function sum(x, y, ...z){
    let total = 0;
    for (const num of z) {
        total += num;
    }
    console.log(x, y, z, total)
}

sum(1,2,3,4,5,6);