let aNumber = 0;
let bNumber = 0;
let operator = "x";
const operators = ['+', '-', '*', '/'];

const display = document.querySelector(".display");
let displayNumber;
const buttonsNodeL = document.querySelectorAll('.digits button');

buttonsNodeL.forEach(button => button.addEventListener('click', () => populateDisplay(button.textContent)


));




function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, b, operator){
    switch(operator){
        case '+':
            add(a, b);
            break;
        case '-':
            substract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
    }
}

function populateDisplay(toBeDisplayed){
    displayNumber = toBeDisplayed;
    display.textContent = toBeDisplayed;
    console.log(displayNumber);
}


function storeNumbers(pressed){
    let a = aNumber;
    let b = bNumber;
    if (pressed 1=)
}
