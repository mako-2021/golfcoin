const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('home', 'Hello from home');
});

module.exports = router