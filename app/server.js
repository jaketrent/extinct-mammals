var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var api = require('./api')

var DB_TABLE = 'mongodb://localhost/mammals'

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Mongoose connected to ' + DB_TABLE)
});
mongoose.connect(DB_TABLE)

var app = express()
app.use(bodyParser())

app.get('/mammals', api.index)
app.get('/mammals/:idOrType', api.showOrType)
app.post('/mammals', api.create)

app.listen(3000, function () {
  console.log('Find extinct mammals on http://localhost:3000...')
})

exports.app = app