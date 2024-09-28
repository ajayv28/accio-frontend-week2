const dec = document.getElementById("button1");
const inc = document.getElementById("button2");
const reset = document.getElementById("button3");

const display = document.getElementById("currCount");
const errorDisplay = document.getElementById("error");

let count = 0;

dec.addEventListener("click", ()=> {
    if(count > 0){
        count--;
        updateDisplay();    
    }else{
        errorDisplay.innerHTML = "Error : Cannot go below 0";
    }
});

inc.addEventListener("click", ()=> {
        count++;
        updateDisplay();    
});

reset.addEventListener("click", ()=> {
        count=0;
        updateDisplay();    
});

function updateDisplay(){
    display.innerHTML= "Your Currrent Count is : " + count;
    errorDisplay.innerHTML = "";
}