class CalculatorService {
    performAddition(a, b) {
        return a + b;
    }

    performSubtraction(a, b) {
        return a - b;
    }

    performMultiplication(a, b) {
        return a * b;
    }

    performDivision(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    performSquareRoot(a) {
        if (a < 0) {
            throw new Error("Square root of a negative number is not allowed.");
        }
        return Math.sqrt(a);
    }

    performPercentage(a, b) {
        return (a * b) / 100;
    }
}

module.exports = CalculatorService;