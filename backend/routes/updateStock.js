const express = require('express');

const app = express.Router();

const updateStock = require('../controllers/Clinic/updateStock.js')

app.put('/update', (req, res) => {
    return updateStock
    .updateStock(req, res)
})

module.exports = app