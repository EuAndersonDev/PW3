let expression = '';

function updateDisplay(value) {
    document.getElementById('result').innerText = value;
}

function insertNumber(number) {
    expression += number;
    updateDisplay(expression);
}

function insertOperator(operator) {
    expression += operator;
    updateDisplay(expression);
}

function clearResult() {
    expression = '';
    updateDisplay(expression);
}

function calculate() {

    fetch('http://localhost:3000/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.result !== undefined) {
                updateDisplay(data.result);
                expression = data.result.toString(); 
            } else {
                updateDisplay('Erro');
            }
        })
        .catch((error) => {
            console.error('Erro:', error);
            updateDisplay('Erro');
        });
}

function calculateSquareRoot() {
    if (!expression || isNaN(expression)) {
        updateDisplay('Erro');
        return;
    }

    fetch('http://localhost:3000/api/calculator/square-root', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ a: parseFloat(expression) }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.result !== undefined) {
                updateDisplay(data.result);
                expression = data.result.toString();
            } else {
                updateDisplay('Erro');
            }
        })
        .catch((error) => {
            console.error('Erro:', error);
            updateDisplay('Erro');
        });
}

function calculatePercentage() {
    if (!expression || isNaN(expression)) {
        updateDisplay('Erro');
        return;
    }

    const value = parseFloat(expression);
    const result = value / 100;

    updateDisplay(result);
    expression = result.toString();
}

updateDisplay(expression);
