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

