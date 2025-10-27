const express = require('express');
const router = express.Router();

const Automovel = require('./controllers/automovel');

// Rota raiz
router.get('/', (req, res) => {
  res.json({titulo:'Fábrica de Automóveis 2025'});
});

// Rota para obter todos os automóveis
router.get('/automoveis', Automovel.read);

module.exports = router;