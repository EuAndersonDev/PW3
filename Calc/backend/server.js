const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para calcular
app.post('/calculate', (req, res) => {
    const { expression } = req.body;

    try {
        // Avalia a expressão matemática
        const result = eval(expression);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Expressão inválida' });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});