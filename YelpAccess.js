const url = "https://api.yelp.com/v3/businesses/blue-star-cafe-milwaukee";
const apiKey = "Bearer LnulvU_jLskBmtPQdn0XDIhhnHjCR8GnMNb2n3MoRk_SK8LmPOQljO_oFm_rMVrLs9GRd84_uoQ38C6-AkUaKEF0is9TaEr-GcMxQwi8W4J9hXG6z4h8jRWpRehrXXYx"

var xhr = new XMLHttpRequest();
 xhr.onload = function(){
     if (xhr.status === 200){
         responseObject = JSON.parse(xhr.responseText);
     }
     else(console.log(err));
 

xhr.open('GET', url, true);
XMLHttpRequest.setRequestHeader('Authorization', apiKey)
xhr.send(null);