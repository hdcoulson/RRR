document.addEventListener('click', function(event) {
  if(event.target.classList.contains('details')){

  var $clickedItemId = event.target.id

  function getCar(cars) {
    var $clickedCar = []
    var $listView = document.querySelector('#list-view.container')
    cars.forEach(function (car) {
      if(car.id === $clickedItemId) {
        if($listView !== null) {
          $listView.setAttribute('class', 'hidden')
        }
        $clickedCar.push(car)
      }
    })
    return $clickedCar
  }

  var clickedCar = getCar(cars)
  var $matchedCar = renderSelectedCar(clickedCar[0])
  var $carDetails = document.querySelector('#car-details')
  $carDetails.innerHTML=''
  $carDetails.appendChild($matchedCar)
  }
})
