var express = require('express')
var app = express()
app.use(express.static('public'))
var bodyParser = require('body-parser')

app.use(bodyParser.json())

console.log('Let\s do this!')

var cars = [
  {
    vehicleId: 1,
    make: 'Honda',
    model: 'CR-V',
    description: 'The Honda CR-V has been totally revamped for 2017, further polishing a formula of practicality, efficiency, refinement and value that has made it the best-selling SUV over the past 20 years.',
    photo: 'images/honda-crv red.jpg',
    proReview: 'The 2017 Honda CR-V is the right choice for a compact SUV. True, it isn’t as much fun to drive as the Mazda CX-5, and the RAV4 comes with more standard safety features. Still, no other vehicle in the compact SUV class hits all the marks most people are looking for in this type of ride: an upscale, comfortable interior; a smooth ride; superior cargo space; good gas mileage; and good reliability. Its base price is higher than some competitors, but the CR-V EX trim provides as many features as the CX-5 and RAV4, while adding more cargo and passenger space. If you can afford just a little bit more, the CR-V returns a whole lot.'
  },
  {
    vehicleId: 2,
    make: 'Toyota',
    model: 'RAV4',
    description: 'Despite the sea of competitors swimming in the compact-SUV pool, the 2017 Toyota RAV4 remains the gold medal champ with its legendary quality, reliability and dependability.',
    photo: 'images/rav4 silver.jpg',
    proReview:'Though you won’t find the RAV4 at the top of our compact SUV rankings, it should still be on your shopping list. The RAV4 is a reliable family hauler that comes with a generous list of features, with a particular focus on safety to keep your mind at ease when carting your family around. Its performance and interior styling won’t wow you like the Ford Escape or the Nissan Rogue will, but the intuitive infotainment system, organized layout, and spacious cabin and cargo area make the RAV4 an appealing SUV in a competitive class. Sure, you may find rival SUVs at lower prices with nicer interiors, but they may not have the long list of standard features or near top-of-the-class cargo space that the RAV4 does.'
  },
  {
    vehicleId: 3,
    make: 'Nissan',
    model: 'Murano',
    description: 'Although the 2017 Nissan Murano SUV can faithfully carry out its duties as a family-hauling crossover SUV, its art-house exterior styling makes it different than anything else in the segment.',
    photo: 'images/murano blue.jpg',
    proReview:'Its below-class-average starting price of $29,770 and appealing standard and available features and packages make the Nissan Murano a vehicle that should be near the top of your shopping list for a midsize SUV. It has an upscale interior, excellent fuel economy, the latest technology and safety features, and an intuitive infotainment system. It also has a composed and smooth ride. It sails over most surfaces with little disturbance, but it could use more steering feedback and less body roll. The Ford Edge offers better handling and overall performance, and the Nissan Pathfinder and Rogue both offer more cargo and seating space, but none can match the Muranos overall package.'
  }
]

var comments = [
  {
    vehicleId: 1,
    name: 'Rick Astley',
    comments: 'We\'re no strangers to love. You know the rules and so do I. A full commitments what Im thinking of. You wouldnt get this from any other guy. I just want to tell you how I\'m feeling. Gotta make you understand. Never gonna give you up, never gonna let you down. Never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye. Never gonna tell a lie and hurt you.',
    stars: 5
  },
  {
    vehicleId: 2,
    name: 'Jane Doe',
    comments: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stars: 4
  },
  {
    vehicleId: 1,
    name: 'Sam Smith',
    comments: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stars: 4
  },
  {
    vehicleId: 3,
    name: 'Sally Strange',
    comments: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stars: 2
  }
]

app.get('/cars', function(req, res) {
  res.json(cars)
})

app.get('/cars/:vehicleId', function(req, res) {
  function getCar(car) {
    var reqId = req.params.vehicleId
    return car.vehicleId.toString() === reqId
  }
  var selectedCar = cars.filter(getCar)
  res.json(selectedCar[0])
})

app.post('/comments', function(req, res) {
  var comment = req.body
  comments.push(comment)
  res.sendStatus(201)
})

app.get('/comments', function(req, res) {
  res.json(comments)
})

app.get('/comments/:vehicleId', function(req, res) {
  function isVehicleComment(comment) {
    if(req.params.vehicleId === comment.vehicleId.toString()) {
      return true
    }
      return false
  }
  var vehicleComments = comments.filter(isVehicleComment)
  res.json(vehicleComments)
})


app.listen(3000)
