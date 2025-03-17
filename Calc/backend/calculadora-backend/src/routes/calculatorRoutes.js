const express = require('express');
const CalculatorController = require('../controllers/calculatorController');

const setCalculatorRoutes = (app) => {
    const router = express.Router();
    const calculatorController = new CalculatorController();

    router.post('/add', calculatorController.add);
    router.post('/subtract', calculatorController.subtract);
    router.post('/multiply', calculatorController.multiply);
    router.post('/divide', calculatorController.divide);
    router.post('/square-root', calculatorController.squareRoot);
    router.post('/percentage', calculatorController.percentage);

    app.use('/api/calculator', router);
};

module.exports = setCalculatorRoutes;