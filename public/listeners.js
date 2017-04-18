document.addEventListener('click', function(event) {
// Create details page
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
  // Submit user comment
  else if(event.target.classList.contains('submit')){
  var $commentForm = document.querySelector('#comments')

  $commentForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var commentFormData = new FormData($commentForm)

    var comment = {}
    for (var response of commentFormData.entries()) {
      comment[response[0]] = response[1]
      }
      var userComment = {
        method: 'POST',
        headers: new Headers ({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(comment)
      }
      fetch('/comments', userComment)
    })
    }
    // render placeholder comments here as a .then?
    // if comments !== null, then render comments
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
