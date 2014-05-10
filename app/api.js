var Mammal = require('./mammal')

var query = function (req, res, filter) {
  var query = Mammal.find(filter)

  if (req.query.order_by)
    query.sort(req.query.order_by)

  query.exec(function (err, mammals) {
    if (err) return res.json(500, err)

    res.json(200, mammals)
  })
}

var isMongoId = function (str) {
  return str.match(/^[0-9a-fA-F]{24}$/)
}

var index = function (req, res) {
  query(req, res)
}

var create = function (req, res) {
  var mammal = new Mammal(req.body)
  mammal.save(function (err, mammal) {
    if (err) return res.json(500, err)

    res.json(201, mammal)
  })
}

var showOrType = function (req, res) {
  var idOrType = req.params.idOrType
  var filter = {}
  filter[isMongoId(idOrType) ? '_id' : 'type'] = idOrType
  query(req, res, filter)
}

exports.index = index
exports.create = create
exports.showOrType = showOrType