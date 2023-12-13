const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const numbers = document.querySelectorAll("#number");
const operations = document.querySelectorAll("#operation");
const equal = document.querySelector("#equal");

let num1 = '';
let num2 = '';
let symbol = '';
let check = '';

// 1. Clear the display
clear.addEventListener("click", () => {
    display.textContent = 0;
    num2 = '';
    num1 = '';
});

// 2. Basic Operations
function add (num1, num2){
    return Number(num1) + Number(num2)
};

function substract (num1, num2){
    return Number(num1) - Number(num2)
};

function multiply (num1, num2){
    return Number(num1) * Number(num2)
};

function divide (num1, num2){
    return Number(num1) / Number(num2)
};

// 3. Listen to the numbers buttons
numbers.forEach(number => {
    number.addEventListener("click", function(){
        num2 += number.textContent
        display.textContent = Number(num2)   
    })
});

//4.  Call certain operator
function operator (num1, symbol, num2){
    symbol = operations.textContent;
    num1 = Number(num2)
    num2 = Number(display.textContent)
    
    if (symbol === '+'){
        results.push(add(num1, num2));
        display.textContent = add(num1, num2);
    } else if (symbol === '-'){
        results.push(substract(num1, num2));
        display.textContent = substract(num1, num2);
    } else if (symbol === '*'){
        results.push(multiply(num1, num2));
        display.textContent = multiply(num1, num2);
    } else if (symbol === '/'){
        results.push(divide(num1, num2));
        display.textContent = divide(num1, num2);
    };      
    
};

// 5. Update the UI Symbols
function updateUiSymbols() {
    if (symbol === '') {
        display.textContent = Number(num2);
    } else if (symbol !== '') {
        display.textContent = results[0];
    }
}

// 6. Listen to the operations
for (let j = 0; j < operations.length; j++) {
    const operato = operations[j];
    
    operato.addEventListener("click", () => {
        num1 = num2;
        num2 = '';
        operator(num1, symbol, num2);
    });
};

// 7. Button equals 
equal.addEventListener("click", ()=> {

});