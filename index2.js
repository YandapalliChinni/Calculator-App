function clearEntry() {
    document.calc.display.value = '';
    currentOperand = null;
    operator = null;
}

function clearDisplay() {
    document.calc.display.value = '';
}

function backspace() {
    let displayvalue = document.calc.display.value;
    document.calc.display.value = displayvalue.substr(0, displayvalue.length - 1);
}

function toggleSign() {
    let displayvalue = document.calc.display.value;
    if (displayvalue.charAt(0) === '-') {
        document.calc.display.value = displayvalue.substr(1);
    } else {
        document.calc.display.value = '-' + displayvalue;
    }
}

function calculate(operation) {
    let displayvalue = document.calc.display.value;

    if (operation === '%') {
        document.calc.display.value = eval(displayvalue) / 100;
    } else if (operation === '1/x') {
        document.calc.display.value = 1 / eval(displayvalue);
    } else if (operation === '√x') {
        document.calc.display.value = Math.sqrt(eval(displayvalue));
    } else if (operation === 'x²') {
        document.calc.display.value = Math.pow(eval(displayvalue), 2);
    }
}

function addToDisplay(value) {
    let display = document.calc.display;
    if (isOperator(display.value.slice(-1)) && isOperator(value)) {
        display.value = display.value.slice(0, -1) + value;
    } else {
        display.value += value;
    }
}

function addOperator(operator) {
    let display = document.calc.display;
    let lastChar = display.value.slice(-1);

    if (isOperator(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function evaluateExpression() {
    try {
        let display = document.calc.display;
        let result = eval(display.value);
        addToHistory(display.value + ' = ' + result);
        display.value = result;
    } catch (e) {
        document.calc.display.value = 'Error';
    }
}

function addToHistory(entry) {
    let historyEntries = document.getElementById('history-entries');
    let historyEntry = document.createElement('p');
    historyEntry.textContent = entry;
    historyEntries.appendChild(historyEntry);
}

function clearHistory() {
    let historyEntries = document.getElementById('history-entries');
    historyEntries.innerHTML = '';
}
