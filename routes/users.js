const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Atess');
});

router.get('/about', (req, res) => {
    res.render('Hatess');
});

module.exports = router;