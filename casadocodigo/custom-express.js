require('dotenv').config()
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const expressValidator = require('express-validator')


app.set('view engine', 'ejs')

app.use(express.static('./public'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(expressValidator())


require('./routes/produtos')(app)

module.exports = app
