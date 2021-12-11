const express = require('express');

const app = express.Router();

const lowStock = require('../controllers/Clinic/lowStock.js')

app.get('/low-stock', (req, res) => {
    return lowStock
    .stockLevels(req, res)
})

module.exports = app