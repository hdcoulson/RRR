var express = require('express')
var app = express()
app.use(express.static('public'))

console.log('hello 2')

app.listen(3000)
