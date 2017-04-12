/* eslint-disable no-unused-vars */
var $carsContainer = document.querySelector('#container')
var cars = fetch('/cars')
cars.then(function(response) {
  return.response.json()
})
  .then(function(cars) {
    for (var i = 0; i <cars.length; i++) {
      var currentCar = car[i]
      var $car = renderCar(currentCar)
      $carsContainer.appendChild($car)
    }
  })
  // <div class="row">
  //   <div class="col-sm-6 col-md-4">
  //     <div class="thumbnail">
  //       <img src="..." alt="...">
  //       <div class="caption">
  //         <h3>Thumbnail label</h3>
  //         <p>...</p>
  //         <p>
  //          <a href="#" class="btn btn-primary" role="button">Button</a>
  //          <a href="#" class="btn btn-default" role="button">Button</a>
  //            /p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
function renderCar(car) {
  var $row = document.createElement('div')
  var $column = document.createElement('div')
  var $thumbnailClass = document.createElement('div')
  var $source = document.createElement('img')
  var $caption = document.createElement('div')
  var $thumbNail = document.createElement('h3')
  var $description = document.createElement('p')
  var $buttonDiv = document.createElement('p')
  var $buttonOne = document.createElement('a')
  var $buttonTwo = document.createElement('a')

  $thumbNail.textContent = car.make + ' ' + car.model
  $description.textContent = car.description

  $row.classList.add('row')
  $column.classList.add('col-sm-6 col-md-4')
  $thumbnailClass.classList.add('thumbnail')
  $caption.classList.add('caption')
  $buttonOne.classList.add('btn btn-primary',' btn btn-default')
  $buttonTwo.classList.add('btn btn-primary',' btn btn-default')



}
