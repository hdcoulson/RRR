document.addEventListener('click', function(event) {
  if (event.target.classList.contains('details')) {
    var $listView = document.querySelector('#list-view.container')
    var $carDetails = document.querySelector('#car-details.container')
    var $welcome = document.querySelector('#welcome.container')
    var $clickedItemId = event.target.id

    var clickedCar = fetch('/cars' + '/' + $clickedItemId)
    clickedCar
      .then(function(response) {
        return response.json()
      })

      .then(function(car) {
        var selectedCar = car
        var $car = renderSelectedCar(selectedCar)

        $welcome.setAttribute('class', 'hidden')
        $listView.setAttribute('class', 'hidden')
        $carDetails.innerHTML = ''
        $carDetails.appendChild($car)

    var clickedCarComments = fetch('/comments' + '/' + $clickedItemId)

      clickedCarComments
      .then(function(response) {
        return response.json()
      })
      .then(function(comments) {
        var $commentsPlacement = document.querySelector('.proReview')
        var selectedCommentsArray = comments

        selectedCommentsArray.forEach(function(comments) {
          var filteredComment = renderFilteredComment(comments)
          $commentsPlacement.appendChild(filteredComment)
        })
        var $carPhotoDiv = document.querySelector('.carPhotoDiv')
        var $starRatings = renderStarRatingDOMElement(renderStarRating(comments))
        $carPhotoDiv.appendChild($starRatings)
      })
      })
  }

  else if (event.target.classList.contains('submit')) {
    var $commentForm = document.querySelector('#commentsForm')
    event.preventDefault()

    var commentFormData = new FormData($commentForm)
    var comment = {}

    for (var response of commentFormData.entries()) {
      comment[response[0]] = response[1]
    }
    comment.stars = parseInt(comment.stars, 10)
    comment.vehicleId = parseInt(comment.vehicleId, 10)

    var userComment = {
      method: 'POST',
      headers: new Headers ({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(comment)
    }

    fetch('/comments', userComment)
      .then(function() {
        document.getElementById("commentsForm").reset();
        var $commentsPlacement = document.querySelector('.proReview')
        var filteredComment = renderFilteredComment(comment)
        $commentsPlacement.appendChild(filteredComment)

        var $clickedItemId = event.target.id
        var clickedCarComments = fetch('/comments' + '/' + $clickedItemId)
        clickedCarComments
        .then(function(response) {
          return response.json()
        })
        .then(function(comment) {
          var $stars = renderStarRating(comment)
          $ownerRatingLocation = document.querySelector('.average-rating')
          $ownerRatingLocation.innerHTML = ''
          $ownerRatingLocation.innerHTML = $stars
        })
        })
    }
  })

document.addEventListener('click', function(event) {
  if (event.target.id === 'back') {
    var $listView = document.querySelector('#list-view')
    var $carDetails = document.querySelector('#car-details')
    var $welcome = document.querySelector('#welcome')

    $welcome.setAttribute('class', 'container')
    $listView.setAttribute('class', 'container')
    $carDetails.innerHTML = ''
  }
})
