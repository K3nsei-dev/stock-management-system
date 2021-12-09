const express = require('express');

const app = express.Router();

const filteredClinics = require('../controllers/Clinic/filterClinic.js')

app.get('/clinic', (req, res) => {
    return filteredClinics
    .filterClinics(req, res)
})

module.exports = app