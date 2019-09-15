$(document).ready(function () {
    var settingsRev = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/RQZCOKGctMfuf-MRVUdVnw/reviews",
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer ng-wZ3Z6BAY_7Qj5LvRPzxE5Uw_64fwJFF0YWaIf1zHD6QU5zzraEO3EaJ7qYAKr0LCrwwD_dahPHqHYFZ5v1fcAsAdghBwHY_jRf_nzKJUct9SKW8jW_X7mD4F9XXYx",

        },
        "processData": false,
        "data": ""
    }
    var settingsGen = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/RQZCOKGctMfuf-MRVUdVnw",
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer ng-wZ3Z6BAY_7Qj5LvRPzxE5Uw_64fwJFF0YWaIf1zHD6QU5zzraEO3EaJ7qYAKr0LCrwwD_dahPHqHYFZ5v1fcAsAdghBwHY_jRf_nzKJUct9SKW8jW_X7mD4F9XXYx",

        },
        "processData": false,
        "data": ""
    }





    const threeStars = "img/3.png";
    const threeHalf = "img/3andhalf.png";
    const fourStars = "img/4.png";
    const fourHalf = "img/4andhalf.png";
    const fiveStars = "img/5.png";


    $.ajax(settingsRev).done(function (responseReviews) {

        for (var i = 0; i < responseReviews.length; i++) {
            console.log('success')
        }

        var nameOne = responseReviews.reviews[0].user.name;
        document.getElementById("textTitle1").innerHTML = `${nameOne}`
        var textOne = responseReviews.reviews[0].text;
        document.getElementById("review1Text").innerHTML = `${textOne}`;
        var ratingOne = responseReviews.reviews[0].rating;
        document.getElementById("RatingOne").src =
            console.log(ratingOne);

        var nameTwo = responseReviews.reviews[1].user.name;
        document.getElementById("textTitle2").innerHTML = `${nameTwo}`
        var textTwo = responseReviews.reviews[1].text;
        document.getElementById("review2Text").innerHTML = `${textTwo}`;
        var ratingTwo = responseReviews.reviews[1].rating;
        console.log(ratingTwo);

        var nameThree = responseReviews.reviews[2].user.name;
        document.getElementById("textTitle3").innerHTML = `${nameThree}`
        var textThree = responseReviews.reviews[2].text;
        document.getElementById("review3Text").innerHTML = `${textThree}`;
        var ratingThree = responseReviews.reviews[2].rating;
        console.log(ratingThree);

        console.log(responseReviews)

    });


    $.ajax(settingsGen).done(function (responseGen) {
        var x = responseGen;
        console.log(x);

        // var nameOne = responseGen.reviews[0].user.name;
        // document.getElementById("textTitle1").innerHTML = `${nameOne}`
        // var textOne = responseGen.reviews[0].text;
        // document.getElementById("review1Text").innerHTML = `${textOne}`;

    });
});