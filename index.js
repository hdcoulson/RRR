var express = require('express')
var app = express()
app.use(express.static('public'))

console.log('hello 2')

var cars = [
  {
    id: 1,
    make: 'Honda',
    model: 'CR-V',
    description: 'The Honda CR-V has been totally revamped for 2017, further polishing a formula of practicality, efficiency, refinement and value that has made it the best-selling SUV over the past 20 years.',
    photo: 'images/honda-crv red.jpg'
  },
  {
    id: 2,
    make: 'Toyota',
    model: 'RAV4',
    description: 'Despite the sea of competitors swimming in the compact-SUV pool, the 2017 Toyota RAV4 remains the gold medal champ with its legendary quality, reliability and dependability.',
    photo: 'images/rav4 silver.jpg'
  },
  {
    id: 3,
    make: 'Nissan',
    model: 'Murano',
    description: 'Although the 2017 Nissan Murano SUV can faithfully carry out its duties as a family-hauling crossover SUV, its art-house exterior styling makes it different than anything else in the segment.',
    photo: 'images/murano blue.jpg'
  }
]

var comments = []

app.get('/cars', function(request, response) {
  response.json(cars)
})

app.listen(3000)
