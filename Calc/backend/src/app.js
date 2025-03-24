const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const setCalculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configurar rotas
setCalculatorRoutes(app);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});