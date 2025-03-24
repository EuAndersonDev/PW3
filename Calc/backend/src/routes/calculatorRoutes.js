const express = require('express');
const CalculatorController = require('../controllers/calculatorController');
const CalculatorService = require('../services/calculatorService');

const setCalculatorRoutes = (app) => {
    const router = express.Router();
    const calculatorService = new CalculatorService();
    const calculatorController = new CalculatorController(calculatorService);

    router.post('/add', (req, res) => calculatorController.add(req, res));
    router.post('/subtract', (req, res) => calculatorController.subtract(req, res));
    router.post('/multiply', (req, res) => calculatorController.multiply(req, res));
    router.post('/divide', (req, res) => calculatorController.divide(req, res));
    router.post('/square-root', (req, res) => calculatorController.squareRoot(req, res));

    app.use('/api/calculator', router);
};

module.exports = setCalculatorRoutes;