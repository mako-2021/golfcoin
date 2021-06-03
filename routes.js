const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    const viewData = {
        title: 'Choose your Story:',
        text: "Story Option",
        footer: "FOOTER"

    }
    res.render('home', viewData);
});


// Jest installed - ready for testing
// Repo deployed on Heroku
// CSS file linked - ready for styling
// data.json created to store stories data, etc..

// Links to story pages:
// router.get('/story/:id', (req, res) => {
//     res.render('storyOne', viewDataStoryOne)
//     res.render('storyTwo', viewDataStoryTwo)
//     res.render('storyThree', viewDataStoryThree)
// })



module.exports = router