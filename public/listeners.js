document.addEventListener('click', function(event) {
// Create details page
  if (event.target.classList.contains('details')){
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
      $carDetails.innerHTML=''
      $carDetails.appendChild($car)
//Display owner comments
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
        // console.log(comments)

      })
      var starRatings = renderStarRatingDOMElement(renderStarRating(comments))
      return starRatings
    })
    })
  }
  // Submit user comment
  else if(event.target.classList.contains('submit')) {
    var $commentForm = document.querySelector('#commentsForm')
    event.preventDefault()
    var commentFormData = new FormData($commentForm)
    var comment = {}
    // console.log(comment)

    for (var response of commentFormData.entries()) {
      comment[response[0]] = response[1]
    }
    comment.stars = parseInt(comment.stars, 10)

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
        // console.log(comment)
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
