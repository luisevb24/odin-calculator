let operationObj = {
    a: '',
    b: '',
    operator: '',
    operate(a, b, operator){
        operator = this.operator;
        a = Number(this.a);
        b = Number(this.b);
        switch(operator){
            case '+':
                this.result = add(a, b);
                break;
            case '-':
                this.result = substract(a, b);
                break;
            case '*':
                this.result = multiply(a, b);
                break;
            case '/':
                this.result = divide(a, b);
                break;
            default: return null;
        }
    },
    result: null,

}
const display = document.querySelector(".display p");
let displayNumber;
const buttonsNodeL = document.querySelectorAll('.digits button');
const operatorsNodel = document.querySelectorAll('.operators button')
const resultButton = document.querySelector('.result');
const clearButton = document.querySelector('.clear');



buttonsNodeL.forEach(button => button.addEventListener('click', () => {
    storeNumbers(button.textContent);
    updateDisplay();
}
));

operatorsNodel.forEach(operator => operator.addEventListener('click', () => {
    operationObj.operator = operator.textContent;
    updateDisplay();
}))

resultButton.addEventListener('click', () => { 
    operationObj.operate();
    updateDisplay();
    console.log(operationObj.result);
})

clearButton.addEventListener('click', ()=>{
    clearObj();
    updateDisplay();
})


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


function updateDisplay(){
    if (operationObj.result === null){
    display.textContent = `${operationObj.a} ${operationObj.operator} ${operationObj.b}`;}
    else{
        display.textContent = operationObj.result;
    }
}


function storeNumbers(pressed){
    if (operationObj.operator == ''){
        operationObj.a += pressed;
    } else if(operationObj.operator != ''){
        operationObj.b += pressed;
    }
}
function clearObj(){
    operationObj.a = '';
    operationObj.b = '';
    operationObj.operator = '';
    operationObj.result = null;
}
//get entered digit
//declare 2 variables for names

console.log(operationObj)