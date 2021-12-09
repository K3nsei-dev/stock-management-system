const express = require('express');

const app = express.Router();

const loginController = require('../controllers/User/index.js');


app.post('/login', (req, res) => {
    return loginController
    .Login(req, res)
})

module.exports = app