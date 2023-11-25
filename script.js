const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const numbers = document.querySelectorAll("#number");
const operations = document.querySelectorAll("#operation");
const equal = document.querySelector("#equal");
const results = [];
let num1;
let num2;
let symbol;


// 2. Basic Operations
function add (num1, num2){
    return parseInt(num1 + num2);
};

function substract (num1, num2){
    return parseInt(num1 - num2);
};

function multiply (num1, num2){
    return parseInt(num1 * num2);
};

function divide (num1, num2){
    return parseInt(num1 / num2);
};


//3.  Call certain operator
function operator (symbol){
    if (symbol === '+'){
        add(num1, num2)
    } else if (symbol === '-'){
        substract(num1, num2)
    } else if (symbol === '*'){
        multiply(num1, num2)
    } else if (symbol === '-'){
        divide(num1, num2)
    };
    
};

// 5. Update the UI
function updateUi (number){
    value = display.textContent += number.textContent;
    return value;
};

// 7. do the math
function doTheMath(symbol){
    num1 = parseInt(display.textContent);
    results.push(num1);
    display.textContent = 0;
    operator(symbol);     
};

// 6. listen to the operators
for (let j = 0; j < operations.length; j++) {
    const symbol = operations[j];
    symbol.addEventListener("click", ()=> doTheMath(symbol)); 
};


//4. listen to the event of the buttons
for (let j = 0; j < numbers.length; j++) {
    const number = numbers[j];
    number.addEventListener("click", ()=> {
        updateUi(number) 
    });
};


// 1. clear the display
clear.addEventListener("click", ()=> {
    display.textContent = 0;
});


//usar reduce para obtener el valor en funcion de la operacion, no mostrar el resultado hasta que se escriba el simbolo o igula  
