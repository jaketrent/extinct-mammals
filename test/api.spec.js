var request = require('request')

var API_BASE_URL = 'http://localhost:3000'

describe('Mammals API', function () {

  it('lists all mammals', function (done) {
    request.get({
      uri: API_BASE_URL + "/mammals"
    }, function(err, res, body) {
      var mammals = JSON.parse(body)
      expect(Array.isArray(mammals)).toBeTruthy()
      done()
    })
  })

  it('creates a new mammal', function (done) {
    request.post({
      uri: API_BASE_URL + '/mammals',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      json: {
        name: 'Trent baby',
        type: 'human',
        year_extinct: 2080
      }
    }, function (err, res, body) {

      expect(typeof body._id).toEqual('string')
      expect(body.name).toEqual('Trent baby')
      expect(body.type).toEqual('human')
      expect(body.year_extinct).toEqual(2080)
      done()
    })

  })

})