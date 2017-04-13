document.addEventListener('click', function(event) {
  if(event.target.classList.contains('details')){

  var $clickedItemId = event.target.id

  var test = fetch('/cars' + '/' + $clickedItemId)
  test.then(function(response) {
    console.log (response.json())
  })
    .then(function(selectedCar) {
      var 
    })



  // function getCar(cars) {
  //   var $clickedCar = []
  //   var $listView = document.querySelector('#list-view.container')
  //   cars.forEach(function (car) {
  //     if(car.id === $clickedItemId) {
  //       if($listView !== null) {
  //         $listView.setAttribute('class', 'hidden')
  //       }
  //       $clickedCar.push(car)
  //     }
  //   })
    // return $clickedCar
  }
  // var clickedCar = getCar(cars)
  // var $matchedCar = renderSelectedCar(clickedCar[0])
  // var $carDetails = document.querySelector('#car-details')
  // $carDetails.innerHTML=''
  // $carDetails.appendChild($matchedCar)
})


// var $carsContainer = document.querySelector('#list-view')
// var carsArray = fetch('/cars')
// carsArray.then(function(response) {
//   return response.json()
// })
//   .then(function(carsArray) {
//     for (var i = 0; i <carsArray.length; i++) {
//       var currentCar = carsArray[i]
//       var $car = renderCar(currentCar)
//       $carsContainer.appendChild($car)
//     }
//   })
