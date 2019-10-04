$(document).ready(function() {
  var settingsRev = {
    async: true,
    crossDomain: true,
    url:
      "https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/RQZCOKGctMfuf-MRVUdVnw/reviews",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer ng-wZ3Z6BAY_7Qj5LvRPzxE5Uw_64fwJFF0YWaIf1zHD6QU5zzraEO3EaJ7qYAKr0LCrwwD_dahPHqHYFZ5v1fcAsAdghBwHY_jRf_nzKJUct9SKW8jW_X7mD4F9XXYx"
    },
    processData: false,
    data: ""
  };
  var settingsGen = {
    async: true,
    crossDomain: true,
    url:
      "https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/RQZCOKGctMfuf-MRVUdVnw",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer ng-wZ3Z6BAY_7Qj5LvRPzxE5Uw_64fwJFF0YWaIf1zHD6QU5zzraEO3EaJ7qYAKr0LCrwwD_dahPHqHYFZ5v1fcAsAdghBwHY_jRf_nzKJUct9SKW8jW_X7mD4F9XXYx"
    },
    processData: false,
    data: ""
  };

  $.ajax(settingsRev).done(function(responseReviews) {
    var reviewOne = {
      name: responseReviews.reviews[0].user.name,
      text: responseReviews.reviews[0].text,
      rating: responseReviews.reviews[0].rating
    };
    document.getElementById("textTitle1").innerHTML = reviewOne.name;
    document.getElementById("review1Text").innerHTML = reviewOne.text;
    document.getElementById("RatingOne").src = `/img/${reviewOne.rating}.png`;

    var reviewTwo = {
      name: responseReviews.reviews[1].user.name,
      text: responseReviews.reviews[1].text,
      rating: responseReviews.reviews[1].rating
    };
    document.getElementById("textTitle2").innerHTML = reviewTwo.name;
    document.getElementById("review2Text").innerHTML = reviewTwo.text;
    document.getElementById("RatingTwo").src = `/img/${reviewTwo.rating}.png`;

    var reviewThree = {
      name: responseReviews.reviews[2].user.name,
      text: responseReviews.reviews[2].text,
      rating: responseReviews.reviews[2].rating
    };
    document.getElementById("textTitle3").innerHTML = reviewThree.name;
    document.getElementById("review3Text").innerHTML = reviewThree.text;
    document.getElementById(
      "RatingThree"
    ).src = `/img/${reviewThree.rating}.png`;
  });

  $.ajax(settingsGen).done(function(responseGen) {
    var count = responseGen.review_count;
    var ratingAve = responseGen.rating;

    document.getElementById(
      "reviewCount"
    ).innerHTML = `Currently there are ${count} with an average of rating of ${ratingAve} stars`;
  });

  //   fade in background over opaque background

  function amountScrolled() {
    var section = document.getElementById("sec");
    var secheight = $(section).height();
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var trackLength = secheight - winheight;

    var pctScrolled = Math.floor((scrollTop / secheight) * 100);
    console.log(pctScrolled);

    $(window).on("scroll", function() {
      $("#sec::before").css("opacity", 100 - $(section).amountScrolled());
    });
  }

  window.addEventListener("scroll", function() {
    // document.body.style.backgroundColor = "white";
    // this.document.getElementById('sec').style.backgroundImage = "none";
    // this.console.log(secHeight);
    // scrollValue = window.scrollY.value
    // console.log(scrollValue);
  });
});
