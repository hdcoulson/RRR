/* eslint-disable no-unused-vars */
var $carsContainer = document.querySelector('#list-view')
var carsArray = fetch('/cars')
carsArray.then(function(response) {
  return response.json()
})
  .then(function(carsArray) {
    for (var i = 0; i <carsArray.length; i++) {
      var currentCar = carsArray[i]
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

  carsArray.forEach(function (car) {
    var $listView = document.querySelector('list-view')
    $listView.appendChild(renderCar(car))
  })
}

// <div class="media">//1
//   <div class="media-left">//2
//     <a href="#">//3
//       <img class="media-object" src="..." alt="...">//4
//     </a>
//   </div>
//   <div class="media-body">//5
//     <h4 class="media-heading">Media heading</h4>//6
//     ...<p>//7 maybe?
//   </div>
// </div>

//details page
function renderSelectedCar(car) {
  var $media = document.createElement('div')//1
  var $mediaLeft = document.createElement('div')//2
  var $href = document.createElement('a')//3
  var $carPhoto = document.createElement('img')//4
  var $mediaBody = document.createElement('div')//5
  var $carName = document.createElement('h4')//6
  var $proReview = document.createElement('p')//7

  $carName.textContent = car.make + ' ' + car.model
  $proReview.textContent = car.proReview

  $media.classList.add('media')//1
  $medialeft.classList.add('media-left')//2
  $carPhoto.classList.add('media-object')//4
  $mediaBody.classList.add('media-body')//5
  $carName.classList.add('media-heading')//6

  $href.setAttribute('href', '#')
  $carPhoto.setAttribute('src', car.photo)

  return $media
}
