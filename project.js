let counter = 0;

function updateClick(){
var buttonClicked = document.getElementById('counter').innerHTML = counter;
    }
function incrementCounter(){
    if(counter < 10){
    counter++;
    updateClick();
    }
}

function decrementCounter(){
    if(counter > 0){
    counter--;
    updateClick();
    }
}

function resetCounter(){
    counter = 0;
    updateClick();
}
















 
