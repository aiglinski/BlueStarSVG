$(document).ready(function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/RQZCOKGctMfuf-MRVUdVnw/reviews",
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer ng-wZ3Z6BAY_7Qj5LvRPzxE5Uw_64fwJFF0YWaIf1zHD6QU5zzraEO3EaJ7qYAKr0LCrwwD_dahPHqHYFZ5v1fcAsAdghBwHY_jRf_nzKJUct9SKW8jW_X7mD4F9XXYx",

            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Postman-Token": "e9ee7a20-1f34-4638-afcf-ed5949468f1a,3e08b223-c327-4c0c-9320-47a06bb0dde0",



            "cache-control": "no-cache"
        },
        "processData": false,
        "data": ""
    }

    $.ajax(settings).done(function (response) {
        var nameOne = response.reviews[0].user.name;
        document.getElementById("textTitle1").innerHTML = `${nameOne}`
        var textOne = response.reviews[0].text;
        document.getElementById("review1Text").innerHTML = `${textOne}`;

        var nameTwo = response.reviews[1].user.name;
        document.getElementById("textTitle2").innerHTML = `${nameTwo}`
        var textTwo = response.reviews[1].text;
        document.getElementById("review2Text").innerHTML = `${textTwo}`;

        var nameThree = response.reviews[2].user.name;
        document.getElementById("textTitle3").innerHTML = `${nameThree}`
        var textThree = response.reviews[2].text;
        document.getElementById("review3Text").innerHTML = `${textThree}`;

    });
});