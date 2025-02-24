let expression = "";

function updateDisplay() {
    document.getElementById("result").innerText = expression || "0";
}

function insertNumber(num) {
    expression += num;
    updateDisplay();
}

function insertOperator(op) {
    if (op === "%") {
        expression += "%"; // Tratamento especial para porcentagem
    } else {
        expression += ` ${op} `;
    }
    updateDisplay();
}

function clearResult() {
    expression = "";
    updateDisplay();
}

function calculateSquareRoot() {
    try {
        let result = Math.sqrt(eval(expression));
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        expression = "Erro";
        updateDisplay();
    }
}

function calculate() {
    try {
        expression = resolvePercentage(expression); // Resolve porcentagem antes do cálculo normal
        let result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        expression = "Erro";
        updateDisplay();
    }
}

function resolvePercentage(expr) {
    return expr.replace(/(\d+(\.\d+)?)\s*%\s*(\d+(\.\d+)?)/g, (match, num1, _, num2) => {
        return parseFloat(num1) * (parseFloat(num2) / 100);
    });
}

// Inicializa a tela com 0
updateDisplay();
