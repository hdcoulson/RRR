document.addEventListener('click', function(event) {
  if(event.target.classList.contains('details')){
  var $listView = document.querySelector('#list-view.container')
  var $carDetails = document.querySelector('#car-details.container')
  var $welcome = document.querySelector('#welcome.container')
  var $clickedItemId = event.target.id

  var clickedCar = fetch('/cars' + '/' + $clickedItemId)
  clickedCar.then(function(response) {
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
  else if(event.target.classList.contains('submit')){
  var $commentForm = document.querySelector('#comments')
  // console.log($commentForm)

  $commentForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var commentFormData = new FormData($commentForm)

    for (var response of commentFormData.entries()) {
      testArray.push(response[0], response[1])
      // console.log(response[0], response[1])
      }
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

var testArray = []
