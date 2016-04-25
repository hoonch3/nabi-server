var request = require('request')
var express = require('express')
var data = require('../public/data/areacode')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  var option = {
    url: 'http://r.encoredtech.com:8015/ocpu/user/dykim/library/powerNet/R/getRealtimeLocalPowerSupply/json'
  }

  request.post(option, (err, response, body) => {
    var result = JSON.parse(body)
    result.forEach(function(r) {
      r.code = data.data[r.local_main + r.local_sub]
    })
    res.json(result)
  })
})

module.exports = router
