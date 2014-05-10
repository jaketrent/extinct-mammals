var mongoose = require('mongoose')

var mammalSchema = mongoose.Schema({
  name: String,
  type: String,
  year_extinct: Number
})
var Mammal = mongoose.model('Mammal', mammalSchema)

module.exports = Mammal