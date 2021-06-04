const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.redirect('/stories')
})

router.get('/stories', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, dataText) => {
        if (err) return console.error(err) 
        const data = JSON.parse(dataText)
        const viewData = {
            id: data.id,
            genre: data.genre,
            name: data.storyName
        }
        res.render('home', viewData);
    })
})

router.get('/stories/:id', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, dataText) => {
        if (err) return console.error(err)
        const data = JSON.parse(dataText)
        const storyId = req.params.id
        const theStory = data.stories.find(findtheStory => findtheStory.id == storyId)
        const viewData = {
            id: theStory.id,
            genre: theStory.genre, 
            name: theStory.storyName,
            image: theStory.image,
            option1: theStory.option1,
            option2: theStory.option2,
            option3: theStory.option3
        }
        res.render('story', viewData)
    })
})

router.post('/stories/:id', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, dataText) => {
      if (err) return console.log(err)
      const data = JSON.parse(dataText)
      console.log(data)
      const storyId = req.params.id
      const theStory = data.stories.find(findtheStory => findtheStory.id == storyId)
      const indexOfStory = data.stories.indexOf(theStory)
      data.stories[indexOfStory] = { ...theStory, option1: req.body.option1, option2: req.body.option2, option3: req.body.option3 }
  
      fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
          return console.error(err)
        } else return console.log('the story has been made!!')
      })
      res.redirect(`/stories/${storyId}`)
    })
  })


module.exports = router


// router.get('/stories', (req, res) => {
//     fs.readFile('./data.json', 'utf8', (err, dataText) => {
//         if (err) return console.error(err) 
//         const data = JSON.parse(dataText)
//         const viewData = {
//             id: data.id,
//             genre: data.genre,
//             name: data.storyName
//         }
//     })
//     res.render('home', viewData);
// });

// router.get('/stories', (req, res) => {
//     fs.readFile('./data.json', 'utf8', (err, dataText) => {
//         if (err) return console.error(err) 
//         const data = JSON.parse(dataText)
//         const viewData = {
//             id: data.id,
//             genre: data.genre,
//             name: data.storyName,
//             image: data.image,
//             option1: data.option1,
//             option2: data.option2,
//             option3: data.option3
//         }
//     })
//     res.render('home', viewData);
// });