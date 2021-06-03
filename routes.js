const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('home', 'Hello from home');
});

module.exports = router