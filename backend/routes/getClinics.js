const express = require('express');

const app = express.Router();

const getClinics = require('../controllers/Clinic/index.js')

app.get('/clinics', (req, res) => {
    return getClinics
    .getStock(req, res)
})

module.exports = app