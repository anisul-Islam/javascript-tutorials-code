/*
DOM Events - mouse click (onclick), input field change (onchange),image loaded, page loaded, mouse over(onmouseover), mouse out(onmouseout), form submitted, keyboard key stroke
*/

function handleMouseOver(){
   document.querySelector("h1").style.color = "green";
}
function handleMouseOut(){
   document.querySelector("h1").style.color = "red";
}

function handleButtonClick(){
    console.log("button is clicked")
}

function handleChange(){
    var name = document.getElementById("name");
    console.log(name.value)
}

