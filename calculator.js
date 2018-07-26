/* eslint-disable indent */
let a = 0;
let b = 0;
let operand = '';

function read() {
  return +document.getElementById('result').value || 0;
}
function write(value) {
  document.getElementById('result').value = value;
}
function toInput(value) {
  if (operand && b === 0) {
    write (value);
    b = value;
  } else if (operand && b !== 0){
    b = read() + value;
    write(b);
  } else {
    write(read()+ value);
  }
}
function substact() {
  a = read();
  operand = '-';
}
function getResult() {
  if(operand && operand === '-'){
    write(a-b);
  }

}


function toInput(id) {
    let value = document.getElementById(id).value;
    document.getElementById('result').value += value;
}

function subtract(){
    const a = document.getElementById('').value;
    const b = document.getElementById('').value;
    return a-b;
}

function clearValue() {
    document.getElementById('result').value = '';
}

