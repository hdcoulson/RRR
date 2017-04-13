document.addEventListener('click', function(event) {
  if(event.target.classList.contains('details')){
  var $listView = document.querySelector('#list-view.container')
  var $carDetails = document.querySelector('#car-details.container')
  var $clickedItemId = event.target.id

  var test = fetch('/cars' + '/' + $clickedItemId)
  test.then(function(response) {
    return response.json()
  })
    .then(function(car) {
      var selectedCar = car
      var $car = renderSelectedCar(selectedCar)
      $carDetails.innerHTML=''
      $carDetails.appendChild($car)
    })
  }
})
