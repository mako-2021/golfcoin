const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('home', 'Hello, all!');
});

module.exports = router