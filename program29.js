// Error handling -> try , catch, finally , throw
// try ... catch handle run time errors (program which is runable), but not syntax error
// Error object
// The finally statement -> execute code, after try and catch 

try{
    // code test
    alert("Hi Everyone");
    alert(x);
    alert("Not gonna work");   

}catch(err){
    console.log(err);
}finally{
    alert("Bye Everyone");
}

