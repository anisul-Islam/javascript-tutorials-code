// Error handling - try, catch, finally
// The throw statement -> create custom errors.

document.querySelector("#checkButton").addEventListener("click",function(){
   
    var num = document.querySelector("#numTextfield").value;
    
    try{
        if(num < 5)
        {
            throw "input is too low"
        } else if(num > 10)
        {
            throw "input is too high"
        }

    }catch(err){
        console.log(err);
    }

})