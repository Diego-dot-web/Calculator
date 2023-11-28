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


// 1. clear the display
clear.addEventListener("click", ()=> {
    display.textContent = 0;
    num2 = '';
    results = [];
});

// 2. Basic Operations
function add (num1, num2){
    num1 = parseInt(results[0]);
    num2 = parseInt(results[1]);
    // using fibonacci for operating 
    for (let i = 2; i <= results.length; i++) {
        let current = num1 + num2;
        num2 = num1;
        num1 = current;
    }
    console.log(num1);
    results.push(num1);
    results.splice(0,2);
    symbols.splice(0,1);


    display.textContent = num1;
};

function substract (num1, num2){
    num1 = parseInt(results[0]);
    num2 = parseInt(results[1]);
    // using fibonacci for operating 
    for (let i = 2; i <= results.length; i++) {
        let current = num1 - num2;
        num2 = num1;
        num1 = current;
    }
    console.log(num1);
    results.push(num1);
    results.splice(0,2);
    symbols.splice(0,1);

    display.textContent = num1;
};

function multiply (num1, num2){
    num1 = parseInt(results[0]);
    num2 = parseInt(results[1]);
    // using fibonacci for operating 
    for (let i = 2; i <= results.length; i++) {
        let current = num1 * num2;
        num2 = num1;
        num1 = current;
    }
    console.log(num1);
    results.push(num1);
    results.splice(0,2);
    symbols.splice(0,1);


    display.textContent = num1;
};

function divide (num1, num2){
    num1 = parseInt(results[0]);
    num2 = parseInt(results[1]);
    // using fibonacci for operating 
    for (let i = 2; i <= results.length; i++) {
        let current = num1 / num2;
        num2 = num1;
        num1 = current;
    }
    console.log(num1);
    results.push(num1);
    results.splice(0,2);
    symbols.splice(0,1);


    display.textContent = num1;
};


//3.  Call certain operator
function operator (num1, symbol, num2){
    if (symbol === '+'){
        add(num1, num2)
    } else if (symbol === '-'){
        substract(num1, num2)
    } else if (symbol === '*'){
        multiply(num1, num2)
    } else if (symbol === '/'){
        divide(num1, num2)
    };
    
};

//4. listen to the event of the buttons
for (let j = 0; j < numbers.length; j++) {
    const number = numbers[j];
    number.addEventListener("click", ()=> {
        num2 += number.textContent
        updateUiNumbers()
    });
};

//7. Update UI Numbers
function updateUiNumbers (){
    display.textContent = parseInt(num2);
}

// 5. Update the UI Symbols
function updateUiSymbols (){
    if (symbol === ''){
        display.textContent = parseInt(num2);
    } else if (symbol != ''){
        display.textContent = parseInt(results[0])
    }
};

// 6. listen to the operations
for (let j = 0; j < operations.length; j++) {
    const operato = operations[j];
    
    operato.addEventListener("click", ()=> {
        symbols.push(operato.textContent);
        symbol = symbols[0];
        num1 += num2;
        results.push(parseInt(num1));
        num1 = '';
        num2 = '';
        
        if (results.length >= 2){
            operator(num1, symbol, num2)
        } 
        
        if (results.length < 2){
            updateUiSymbols()
        }
    });
};