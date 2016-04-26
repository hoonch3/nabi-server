var fs = require('fs')
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

var INPUT = './public/data/areacode.csv'
var OUTPUT = './public/data/areacode.js'

//read from file
fs.createReadStream(INPUT).pipe(converter);

//end_parsed will be emitted once parsing finished
converter.on("end_parsed", function (result) {
  var target = {}

  result.forEach(function(d) {
    target[d.LOCAL_MAIN + '_' + d.LCOCAL_SUB] = d.CODE_SUB
  })

  fs.writeFile(OUTPUT, 'module.exports = {"data": ' + JSON.stringify(content) + '}')
});
