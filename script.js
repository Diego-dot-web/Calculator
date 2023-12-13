const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const numbers = document.querySelectorAll("#number");
const operations = document.querySelectorAll("#operation");
const equal = document.querySelector("#equal");
const decimal = document.querySelector("#decimal");

let previousValue = '';
let currentValue = '';
let symbol = '';

// 1. Clear the display
clear.addEventListener("click", () => {
    display.textContent = 0;
    currentValue = '';
    previousValue = '';
    symbol = '';
});

// 2. Listen to the numbers buttons
numbers.forEach(number => {
    number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
        display.textContent =  currentValue;   
    })
});

//2.2 Hande numbers
function handleNumber(num){
    if (currentValue.length <= 5){
        currentValue += num;
    }
}

//3.  Call certain operator
function operator (){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (symbol === '+'){
        previousValue += currentValue
    } else if (symbol === '-'){
        previousValue -= currentValue
    } else if (symbol === '*'){
        previousValue *= currentValue
    } else if (symbol === '/'){
        previousValue /= currentValue
    };  
    
    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
};

//4. round numbers
function roundNumber(num){
    return Math.round(num * 1000)/1000;
};

// 5. Listen to the operations
operations.forEach((operato) => operato.addEventListener("click", function(e){
    handleOperator(e.target.textContent);
    display.textContent = previousValue;
}));;

//5.5 handle operators
function handleOperator (op){
    symbol = op;
    previousValue = currentValue;
    currentValue = '';
}

// 6. Button equals 
equal.addEventListener("click", ()=> {
    if(currentValue === "0" && symbol === "/"){
        display.textContent = "You dumbass"
    } else if (currentValue != '' && previousValue != ''){
        operator();
        currentValue = previousValue;
        previousValue = ""
        if(currentValue.length <= 5){
            display.textContent = currentValue;
        } else {
            display.textContent = currentValue.slice(0,5) + "...";
        }
    } 
});

//7. Listen to the decimal
decimal.addEventListener('click', ()=>{
    addDecimal();
})

//7.5 Handle Decimal 
function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += ".";
    }
}