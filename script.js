const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const numbers = document.querySelectorAll("#number");
const operations = document.querySelectorAll("#operation");
const equal = document.querySelector("#equal");

let results = [];
let symbols = [];
let num1 = '';
let num2 = '';
let symbol = '';
display.textContent = 0;

// 1. Clear the display
clear.addEventListener("click", () => {
    display.textContent = 0;
    num2 = '';
    results = [];
    symbols = [];
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


//3.  Call certain operator
function operator (num1, symbol, num2){
    symbol = symbols[0];
    num1 = Number(results[0])
    num2 = Number(results[1])
    
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
    
    results.splice(0,2);
    symbols.splice(0,1);
};

// 8. Button equals 
equal.addEventListener("click", ()=> {
    results.push(Number(display.textContent));
    if(results.length>=2) operator(num1, symbol, num2);
    if (results.length < 2){
        num1 = results[0];
        num2 = "";
    }
});

// 4. Listen to the event of the buttons
for (let j = 0; j < numbers.length; j++) {
    const number = numbers[j];
    number.addEventListener("click", () => {
        num2 += number.textContent;
        updateUiNumbers();
    });
}

// 7. Update UI Numbers
function updateUiNumbers() {
    display.textContent = Number(num2);
}

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
        symbols.push(operato.textContent);
        symbol = symbols[0];
        num1 = num2;
        results.push(num2);
        num1 = '';
        num2 = '';
        
        if (results.length >= 2) {
            operator(num1, symbol, num2);
        }
        
        if (results.length < 2) {
            updateUiSymbols();
        }
    });
};
