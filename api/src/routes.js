const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({titulo:'Fábrica de Automóveis 2025'});
});

module.exports = router;