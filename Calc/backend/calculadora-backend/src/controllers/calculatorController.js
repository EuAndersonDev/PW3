class CalculatorController {
    constructor(calculatorService) {
        this.calculatorService = calculatorService;
    }

    add(req, res) {
        const { a, b } = req.body;
        const result = this.calculatorService.performAddition(a, b);
        res.json({ result });
    }

    subtract(req, res) {
        const { a, b } = req.body;
        const result = this.calculatorService.performSubtraction(a, b);
        res.json({ result });
    }

    multiply(req, res) {
        const { a, b } = req.body;
        const result = this.calculatorService.performMultiplication(a, b);
        res.json({ result });
    }

    divide(req, res) {
        const { a, b } = req.body;
        if (b === 0) {
            return res.status(400).json({ error: 'Division by zero is not allowed.' });
        }
        const result = this.calculatorService.performDivision(a, b);
        res.json({ result });
    }

    squareRoot(req, res) {
        const { a } = req.body;
        try {
            const result = this.calculatorService.performSquareRoot(a);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    percentage(req, res) {
        const { a, b } = req.body;
        const result = this.calculatorService.performPercentage(a, b);
        res.json({ result });
    }
}

export default CalculatorController;