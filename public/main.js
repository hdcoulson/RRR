/* eslint-disable no-unused-vars */
var $carsContainer = document.querySelector('#list-view')
var carsArray = fetch('/cars')
carsArray.then(function(response) {
  return response.json()
})
  .then(function(carsArray) {
    for (var i = 0; i < carsArray.length; i++) {
      var currentCar = carsArray[i]
      var $car = renderCar(currentCar)
      $carsContainer.appendChild($car)
    }
  })

function renderCar(car) {
  var $column = document.createElement('div')
  var $thumbnailClass = document.createElement('div')
  var $carPhoto = document.createElement('img')
  var $caption = document.createElement('div')
  var $carName = document.createElement('h3')
  var $description = document.createElement('p')
  var $buttonDiv = document.createElement('p')
  var $button = document.createElement('a')

  $carName.textContent = car.make + ' ' + car.model
  $description.textContent = car.description
  $button.textContent = 'Details'

  $column.classList.add('col-sm-6', 'col-md-4')
  $thumbnailClass.classList.add('thumbnail')
  $caption.classList.add('caption')
  $button.classList.add('btn', 'btn-primary','btn', 'btn-default', 'details')
  $carPhoto.classList.add('img-responsive')

  $carPhoto.setAttribute('src', car.photo)
  $carPhoto.setAttribute('id', car.vehicleId)
  $button.setAttribute('href', '#')
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
}

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
  var $comments = document.createElement('div')
  var $commentsForm = document.createElement('form')
  var $nameLabel = document.createElement('label')
  var $nameFieldLabel = document.createElement('label')
  var $nameField = document.createElement('input')
  var $hiddenId = document.createElement('input')
  var $commentsLabel = document.createElement('label')
  var $commentsFieldLabel = document.createElement('label')
  var $commentsField = document.createElement('textarea')
  var $ratingLabelName = document.createElement('label')
  var $selectId = document.createElement('select')
  var $optionValueBlank = document.createElement('option')
  var $optionValueOne = document.createElement('option')
  var $optionValueTwo = document.createElement('option')
  var $optionValueThree = document.createElement('option')
  var $optionValueFour = document.createElement('option')
  var $optionValueFive = document.createElement('option')
  var $submitButtonLabel = document.createElement('label')
  var $submitButton = document.createElement('button')

  $carName.textContent = car.make + ' ' + car.model
  $proReview.textContent = car.proReview
  $nameLabel.textContent = 'Name:'
  $commentsLabel.textContent = 'Comments:'
  $submitButton.textContent = 'submit'
  $ratingLabelName.textContent = 'Stars' + '   '
  $optionValueBlank.textContent = '---'
  $optionValueOne.textContent = 1
  $optionValueTwo.textContent = 2
  $optionValueThree.textContent = 3
  $optionValueFour.textContent = 4
  $optionValueFive.textContent = 5

  $column.classList.add('col-sm-12')
  $media.classList.add('media')
  $mediaLeft.classList.add('media-left')
  $carPhoto.classList.add('media-object')
  $mediaLeftDiv.classList.add('col-sm-4')
  $mediaBodyDiv.classList.add('col-sm-8')
  $carPhoto.classList.add('img-responsive')
  $mediaLeftDiv.classList.add('carPhotoDiv')
  $mediaBody.classList.add('media-body')
  $carName.classList.add('media-heading')
  $carName.classList.add('carName')
  $comments.classList.add('col-sm-12')
  $submitButton.classList.add('submit')
  $proReview.classList.add('proReview')

  $href.setAttribute('href', '#')
  $carPhoto.setAttribute('src', car.photo)
  $carName.setAttribute('id', car.vehicleId)
  $commentsForm.setAttribute('id', 'commentsForm')
  $nameField.setAttribute('type', 'text')
  $nameField.setAttribute('name', 'name')
  $nameField.setAttribute('placeholder', 'Name')
  $nameField.setAttribute('id', car.vehicleId)
  $hiddenId.setAttribute('type', 'hidden')
  $hiddenId.setAttribute('name', 'vehicleId')
  $hiddenId.setAttribute('value', car.vehicleId)
  $commentsField.setAttribute('type', 'text')
  $commentsField.setAttribute('name', 'comments')
  $commentsField.setAttribute('id', car.vehicleId)
  $commentsField.setAttribute('cols', 40)
  $commentsField.setAttribute('rows', 5)
  $commentsField.setAttribute('placeholder', 'Comments')
  $submitButton.setAttribute('id', car.vehicleId)
  $selectId.setAttribute('id', 'stars')
  $selectId.setAttribute('name', 'stars')

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
  $submitButtonLabel.appendChild($submitButton)

  $commentsForm.appendChild($ratingLabelName)
  $commentsForm.appendChild($submitButtonLabel)
  $ratingLabelName.appendChild($selectId)
  $selectId.appendChild($optionValueBlank)
  $selectId.appendChild($optionValueOne)
  $selectId.appendChild($optionValueTwo)
  $selectId.appendChild($optionValueThree)
  $selectId.appendChild($optionValueFour)
  $selectId.appendChild($optionValueFive)

  return $column
}

function renderFilteredComment(comment) {

  var $column = document.createElement('div')
  var $media = document.createElement('div')
  var $mediaBody = document.createElement('div')
  var $mediaHeading = document.createElement('h4')
  var $commentName = document.createElement('h5')
  var $commentBody = document.createElement('p')
  var $starRating = document.createElement('p')

  $mediaHeading.textContent = 'Owner comment'
  $commentName.textContent = comment.name
  $commentBody.textContent = comment.comments
  $starRating.textContent = 'Star Rating:' + ' ' + comment.stars

  $column.classList.add('col-sm-12')
  $column.classList.add('commentsDiv')
  $media.classList.add('media')
  $mediaHeading.classList.add('media-heading')
  $mediaBody.classList.add('media-body')

  $column.appendChild($media)
  $media.appendChild($mediaBody)
  $mediaBody.appendChild($mediaHeading)
  $mediaBody.appendChild($commentName)
  $mediaBody.appendChild($commentBody)
  $mediaBody.appendChild($starRating)

  return $column
}

function renderStarRatingDOMElement(rating) {
  var $carPhotoDiv = document.querySelector('.carPhotoDiv')

  var $ownerRatingsDiv = document.createElement('div')
  var $ownerRatingsMedia = document.createElement('div')
  var $ownerRatingsMediaBody = document.createElement('div')
  var $ownerRatingsTitle = document.createElement('h4')
  var $ownerRatingsBody = document.createElement('p')

  $ownerRatingsTitle.textContent = "Average owner rating"
  $ownerRatingsBody.textContent = rating

  $ownerRatingsDiv.classList.add('col-sm-12')
  $ownerRatingsMedia.classList.add('media')
  $ownerRatingsMediaBody.classList.add('media-body')
  $ownerRatingsTitle.classList.add('media-heading')
  $ownerRatingsBody.classList.add('average-rating')

  $ownerRatingsDiv.appendChild($ownerRatingsMedia)
  $ownerRatingsMedia.appendChild($ownerRatingsMediaBody)
  $ownerRatingsMediaBody.appendChild($ownerRatingsTitle)
  $ownerRatingsMediaBody.appendChild($ownerRatingsBody)

  $carPhotoDiv.appendChild($ownerRatingsDiv)
}

function renderStarRating(commentsArray) {
  var onlyStarRatings = commentsArray.map(function(comment) {
    return comment.stars
  })

  var sumOfAllStars = onlyStarRatings.reduce(function (a, b) {
    return a + b
  }, 0 )
  var rating = sumOfAllStars/(commentsArray.length)
  var roundedRating = (rating).toFixed(1)

  return (roundedRating + '  ' + 'Stars')
}

var starImagesArray = [
  {
    one: '1-star.png'
  },
  {
    two: '2-stars.png'
  },
  {
    three: '3-stars.png'
  },
  {
    four: '4-stars.png'
  },
  {
    five: '5-stars.png'
  }
]
