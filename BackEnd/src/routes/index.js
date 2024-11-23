const express = require('express');
const router = express.Router();

// Rota padrão para a raiz
router.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
});

// Rota para lidar com 404 - Not Found
router.use((req, res) => {
    res.status(404).send('Rota não encontrada');
});

module.exports = router;