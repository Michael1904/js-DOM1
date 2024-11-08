let currentNumber = '';
let previousNumber = '';
let operator = null;

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    updateDisplay('0');
}

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
    updateDisplay(currentNumber || '0');
}

function updateDisplay(value) {
    document.getElementById('result').textContent = value;
}

function calculate(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') calculateResult();
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    if (!operator || previousNumber === '' || currentNumber === '') return;

    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (operator === '+') result = prev + current;
    else if (operator === '-') result = prev - current;
    else if (operator === '*') result = prev * current;
    else if (operator === '/') result = current === 0 ? 'Error' : prev / current;

    if (result !== 'Error') result = Math.round(result * 100) / 100;
    updateDisplay(result);
    
    currentNumber = result === 'Error' ? '' : result.toString();
    previousNumber = '';
    operator = null;
}

function invert() {
    currentNumber = (parseFloat(currentNumber) * -1 || 0).toString();
    updateDisplay(currentNumber);
}
