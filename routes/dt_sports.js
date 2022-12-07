const express = require('express');
const router = express.Router();

const { create } = require('../controllers/dt_sports');

router.post('/dt-sports/create', create);

module.exports = router;
