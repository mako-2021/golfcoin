const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    const viewData = {
        text: 'Hello from home'
    }
    res.render('home', viewData);
});

module.exports = router