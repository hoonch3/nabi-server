var fs = require('fs')

var data = require('./public/data/data')
// var target = {}
//
// data.data.forEach(function(d) {
//   target[d.local_main + d.local_sub] = d.code_sub
// })
//
// fs.writeFile('./public/data/data.js', 'module.exports = {"data": ' + JSON.stringify(target) + '}')

console.log(data.data)
