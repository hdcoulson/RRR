/* eslint-disable no-unused-vars */
var $carsContainer = document.querySelector('#list-view')
var cars = fetch('/cars')
cars.then(function(response) {
  return response.json()
})
  .then(function(cars) {
    for (var i = 0; i <cars.length; i++) {
      var currentCar = cars[i]
      var $car = renderCar(currentCar)
      $carsContainer.appendChild($car)
    }
  })

//list-view page
function renderCar(car) {
  var $column = document.createElement('div')//2
  var $thumbnailClass = document.createElement('div')//3
  var $carPhoto = document.createElement('img')//4
  var $caption = document.createElement('div')//5
  var $carName = document.createElement('h3')//6
  var $description = document.createElement('p')//7
  var $buttonDiv = document.createElement('p')//8
  var $button = document.createElement('a')//9

  $carName.textContent = car.make + ' ' + car.model//6
  $description.textContent = car.description//7
  $button.textContent = 'Details'

  $column.classList.add('col-sm-6', 'col-md-4')//2
  $thumbnailClass.classList.add('thumbnail')//3
  $caption.classList.add('caption')//5
  $button.classList.add('btn', 'btn-primary','btn', 'btn-default', 'details')//9

  $carPhoto.setAttribute('src', car.photo)//4
  $carPhoto.setAttribute('id', car.id)
  $button.setAttribute('href', '#')//9
  $button.setAttribute('id', car.id)
  $carName.setAttribute('id', car.id)

  $column.appendChild($thumbnailClass)
  $thumbnailClass.appendChild($carPhoto)
  $thumbnailClass.appendChild($caption)
  $caption.appendChild($carName)
  $caption.appendChild($description)
  $caption.appendChild($buttonDiv)
  $buttonDiv.appendChild($button)

  return $column

  cars.forEach(function (car) {
    var $listView = document.querySelector('list-view')
    $listView.appendChild(renderCar(car))
  })
}

// <div class="media">
//   <div class="media-left">
//     <a href="#">
//       <img class="media-object" src="..." alt="...">
//     </a>
//   </div>
//   <div class="media-body">
//     <h4 class="media-heading">Media heading</h4>
//     ...
//   </div>
// </div>

//details page
function renderSelectedCar(car) {

}
