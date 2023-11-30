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
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// 3. Call certain operator
function operator(num1, symbol, num2) {
    num1 = results.length > 0 ? results[0] : 0;
    num2 = parseFloat(num2);

    if (symbol === '+') {
        results[0] = add(num1, num2);
    } else if (symbol === '-') {
        results[0] = subtract(num1, num2);
    } else if (symbol === '*') {
        results[0] = multiply(num1, num2);
    } else if (symbol === '/') {
        results[0] = divide(num1, num2);
    }

    display.textContent = results[0];
}

// 8. Button equals
equal.addEventListener("click", () => {
    symbol = symbols.length > 0 ? symbols[0] : '';
    num1 = results.length > 0 ? results[0] : '';
    operator(num1, symbol, num2);
    num1 = results[0];
    symbols = [];
    num2 = '';
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
        num1 = results.length > 0 ? results[0] : '';
        results.push(parseFloat(num2));
        num2 = '';

        if (results.length >= 2) {
            operator(num1, symbol, num2);
        }

        if (results.length < 2) {
            updateUiSymbols();
        }
    });
}
