let firstInputThenMemory=0,
    secondInput = true,
    operand = null;

function initAction(id){
    secondInput = true;
    if (operand === null){
        firstInputThenMemory = Number(fromInput());
        operand = id;
    }
    else{
        operand = id;
        switchOperand();
        toInput(firstInputThenMemory.toString());
        secondInput = true;
    }
}

function getResult(){
    switchOperand();
    fromInputClean(firstInputThenMemory.toString());
    firstInputThenMemory = 0;
    secondInput = true;
    operand = null;
}

function toInput(id) {
    let a = document.getElementById('result').value;
    if (secondInput) {
        clearValue();
        secondInput = false;
    }
    if (a === '0') document.getElementById('result').value = id;
    else document.getElementById('result').value += id;
}

function fromInputClean(id){
    clearValue();
    toInput(id);
}

function newNumberInput(){
    let result = document.getElementById('result').value;
    clearValue();
    return result;
}

document.getElementById('result').value = '0';

function fromInput(){
    return document.getElementById('result').value;
}

function switchOperand(){
    switch(operand){
    case '-':
        firstInputThenMemory = firstInputThenMemory - Number(newNumberInput());
        break;
    case '+':
        firstInputThenMemory = firstInputThenMemory + Number(newNumberInput());
        break;
    case '*':
        firstInputThenMemory = firstInputThenMemory * Number(newNumberInput());
        break;
    case '/':
        firstInputThenMemory = firstInputThenMemory / Number(newNumberInput());
        break;
    }
}

function clearValue() {
    document.getElementById('result').value = '';
}

function clearToInitialState() {
    clearValue();
}

function calculate() {
    switch (operand){
    case '/':
        result = result / num;
        break;
    case '*':
        result = result * num;
        break;
    case '-':
        result = Number(result) - Number(num);
        break;
    case '+':
        result = Number(result) + Number(num);
        break;
    default:
    }
}
