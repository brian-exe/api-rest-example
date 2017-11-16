var express = require('express')

var app = express()
var bodyparser = require('body-parser')
var api = require('./routes/favoritos')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/api',api)

module.exports=app
