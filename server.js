const express = require('express')
const hbs = require('express-handlebars')
const router = require('./routes')
const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

// Handlebars configuration
server.use(express.static('public'))
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here

server.use('/', router)


module.exports = server