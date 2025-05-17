const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/menu', (req, res) => {
    res.render('menu');
});

router.get('/reservation', (req, res) => {
    res.render('reservation');
});

module.exports = router;