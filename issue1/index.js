var express = require('express')
var app = express()
app.use(express.static('public'))

console.log('hello 2')

var cars = [
  {
    id: 1,
    make: 'Honda',
    model: 'CR-V'
  },
  {
    id: 2,
    make: 'Toyota',
    model: 'RAV4'
  },
  {
    id: 3,
    make: 'Nissan',
    model: 'Murano'
  }
]

app.get('/cars', function(request, response) {
  response.json(cars)
})

app.listen(3000)
