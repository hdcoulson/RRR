document.addEventListener('click', function(event) {
  if(event.target.classList.contains('details')){
  var $listView = document.querySelector('#list-view.container')
  var $carDetails = document.querySelector('#car-details.container')
  var $welcome = document.querySelector('#welcome.container')
  var $clickedItemId = event.target.id

  var test = fetch('/cars' + '/' + $clickedItemId)
  test.then(function(response) {
    return response.json()
  })
    .then(function(car) {
      var selectedCar = car
      var $car = renderSelectedCar(selectedCar)
      $welcome.setAttribute('class', 'hidden')
      $listView.setAttribute('class', 'hidden')
      $carDetails.innerHTML=''
      $carDetails.appendChild($car)
    })
  }
})

document.addEventListener('click', function(event) {
  if(event.target.id === 'back') {
    var $listView = document.querySelector('#list-view')
    var $carDetails = document.querySelector('#car-details')
    var $welcome = document.querySelector('#welcome')
    $welcome.setAttribute('class', 'container')
    $listView.setAttribute('class', 'container')
    $carDetails.innerHTML=''
  }
})
//
