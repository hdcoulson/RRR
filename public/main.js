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
  $carPhoto.classList.add('img-responsive')

  $carPhoto.setAttribute('src', car.photo)//4
  $carPhoto.setAttribute('id', car.vehicleId)
  $button.setAttribute('href', '#')//9
  $button.setAttribute('id', car.vehicleId)
  $carName.setAttribute('id', car.vehicleId)

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

// <!-- <div class="col-sm-12">//1
//   <div class="col-sm-4">//2
//   </div>
//   <div class="col-sm-8">//3
//     <div class="container">//4
//       <form id="comments">//5--AA
//         <label>Name:</label>//6
//         <label>//7
//           <input type="text" name="name" placeholder="Name">//8--AA
//         </label>
//         <label>Comments:</label>//9
//         <label>//10
//           <textarea type="text" name="comments" cols="40" rows="5" placeholder="Comments"></textarea>//11--AA
//         </label>
//         <label>//12
//           <button type="submit">Submit</button>//13--AA
//         </label>
//       </form>
//     </div>
//     </div>
//   </div> -->

//details page
function renderSelectedCar(car) {
  var $column = document.createElement('div')
  var $media = document.createElement('div')
  var $mediaLeftDiv = document.createElement('div')
  var $mediaLeft = document.createElement('div')
  var $href = document.createElement('a')
  var $carPhoto = document.createElement('img')
  var $mediaBodyDiv = document.createElement('div')
  var $mediaBody = document.createElement('div')
  var $carName = document.createElement('h3')
  var $proReview = document.createElement('p')
  var $comments = document.createElement('div')//1
  var $commentsForm = document.createElement('form')//5
  var $nameLabel = document.createElement('label')//6
  var $nameFieldLabel = document.createElement('label')//7
  var $nameField = document.createElement('input')//8
  var $hiddenId = document.createElement('input')//8.5
  var $commentsLabel = document.createElement('label')//9
  var $commentsFieldLabel = document.createElement('label')//10
  var $commentsField = document.createElement('textarea')//11
  var $submitButtonLabel = document.createElement('label')//12
  var $submitButton = document.createElement('button')//13


  $carName.textContent = car.make + ' ' + car.model
  $proReview.textContent = car.proReview
  $nameLabel.textContent = 'Name:'//6
  $commentsLabel.textContent = 'Comments:'//9
  $submitButton.textContent = 'submit'

  $column.classList.add('col-sm-12')
  $media.classList.add('media')
  $mediaLeft.classList.add('media-left')
  $carPhoto.classList.add('media-object')
  $mediaLeftDiv.classList.add('col-sm-4')
  $mediaBodyDiv.classList.add('col-sm-8')
  $carPhoto.classList.add('img-responsive')
  $mediaBody.classList.add('media-body')
  $carName.classList.add('media-heading')
  $comments.classList.add('col-sm-12')//1
  $submitButton.classList.add('submit')
  $proReview.classList.add('proReview')

  $href.setAttribute('href', '#')
  $carPhoto.setAttribute('src', car.photo)
  $commentsForm.setAttribute('id', 'comments')//5
  $nameField.setAttribute('type', 'text')//8
  $nameField.setAttribute('name', 'name')//8
  $nameField.setAttribute('placeholder', 'Name')//8
  $nameField.setAttribute('id', car.vehicleId)
  $hiddenId.setAttribute('type', 'hidden')
  $hiddenId.setAttribute('name', 'vehicleId')
  $hiddenId.setAttribute('value', car.vehicleId)
  $commentsField.setAttribute('type', 'text')//11
  $commentsField.setAttribute('name', 'comments')//11
  $commentsField.setAttribute('id', car.vehicleId)
  $commentsField.setAttribute('cols', 40)//11
  $commentsField.setAttribute('rows', 5)//11
  $commentsField.setAttribute('placeholder', 'Comments')//11
  $submitButton.setAttribute('id', car.vehicleId)

  $column.appendChild($media)
  $media.appendChild($mediaLeftDiv)
  $mediaLeftDiv.appendChild($mediaLeft)
  $mediaLeft.appendChild($href)
  $mediaLeft.appendChild($carPhoto)
  $media.appendChild($mediaBodyDiv)
  $mediaBodyDiv.appendChild($mediaBody)
  $mediaBody.appendChild($carName)
  $mediaBody.appendChild($proReview)
  $mediaBodyDiv.appendChild($comments)

  $comments.appendChild($commentsForm)
  $commentsForm.appendChild($nameLabel)
  $commentsForm.appendChild($nameFieldLabel)
  $nameFieldLabel.appendChild($nameField)
  $nameFieldLabel.appendChild($hiddenId)
  $commentsForm.appendChild($commentsLabel)
  $commentsForm.appendChild($commentsFieldLabel)
  $commentsFieldLabel.appendChild($commentsField)
  $commentsForm.appendChild($submitButtonLabel)
  $submitButtonLabel.appendChild($submitButton)

  return $column
}

//owner comments
function renderFilteredComments(comment) {
  //createElement
  var $column = document.createElement('div')
  var $media = document.createElement('div')
  var $mediaBody = document.createElement('div')
  var $mediaHeading = document.createElement('h4')
  var $commentName = document.createElement('h5')
  var $commentBody = document.createElement('p')

  //textContent
  $mediaHeading.textContent = 'Owner comment'
  $commentName.textContent = comment.name
  $commentBody.textContent = comment.comments

  //classList
  $column.classList.add('col-sm-12')
  $column.classList.add('commentsDiv')
  $media.classList.add('media')
  $mediaHeading.classList.add('media-heading')
  $mediaBody.classList.add('media-body')

  //setAttribute

  //appendChild
  $column.appendChild($media)
  $media.appendChild($mediaBody)
  $mediaBody.appendChild($mediaHeading)
  $mediaBody.appendChild($commentName)
  $mediaBody.appendChild($commentBody)


  return $column
}
