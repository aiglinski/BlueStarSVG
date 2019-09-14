$(document).ready(function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/blue-star-cafe-milwaukee",
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer LnulvU_jLskBmtPQdn0XDIhhnHjCR8GnMNb2n3MoRk_SK8LmPOQljO_oFm_rMVrLs9GRd84_uoQ38C6-AkUaKEF0is9TaEr-GcMxQwi8W4J9hXG6z4h8jRWpRehrXXYx",
            "User-Agent": "PostmanRuntime/7.16.3",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Postman-Token": "e9ee7a20-1f34-4638-afcf-ed5949468f1a,3e08b223-c327-4c0c-9320-47a06bb0dde0",
            "Host": "api.yelp.com",
            "Accept-Encoding": "gzip, deflate",
            "Connection": "keep-alive",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": ""
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});