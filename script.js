const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const numbers = document.querySelectorAll("#number");
const operations = document.querySelectorAll("#operation");
const equal = document.querySelector("#equal");
const results = [];

let num1 = '';
let num2 = '';
let symbol = '';
display.textContent = 0;


// 1. clear the display
clear.addEventListener("click", ()=> {
    display.textContent = 0;
    num2 = '';
});

// 2. Basic Operations
function add (num1, num2){
    console.log(parseInt(num1) + parseInt(num2)) ;
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
function operator (num1, symbol, num2){
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

//4. listen to the event of the buttons

for (let j = 0; j < numbers.length; j++) {
    const number = numbers[j];
    number.addEventListener("click", ()=> {
        num2 += number.textContent
        updateUi()
    });
};


// 5. Update the UI
function updateUi (){
    display.textContent = num2;
};

// 6. listen to the operations
for (let j = 0; j < operations.length; j++) {
    const operator = operations[j];
    operator.addEventListener("click", ()=> {
        symbol = operator.textContent;
        num1 += num2;
        results.push(num1);
        num1= '';
        num2 = '';
        updateUi()
    });
};

//usar reduce para obtener el valor en funcion de la operacion, no mostrar el resultado hasta que se escriba el simbolo o igula  
