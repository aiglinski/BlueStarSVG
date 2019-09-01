var settings = {
  async: true,
  crossDomain: true,
  url: 'https://api.yelp.com/v3/businesses/blue-star-cafe-milwaukee',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer LnulvU_jLskBmtPQdn0XDIhhnHjCR8GnMNb2n3MoRk_SK8LmPOQljO_oFm_rMVrLs9GRd84_uoQ38C6-AkUaKEF0is9TaEr-GcMxQwi8W4J9hXG6z4h8jRWpRehrXXYx',
    'User-Agent': 'PostmanRuntime/7.16.3',
    Accept: '*/*',
    'Cache-Control': 'no-cache',
    'Postman-Token':
      '595f05c0-9fd4-4515-b7d2-634d13a814cb,fbadc4e4-928c-49f3-ac68-26509962a5c5',
    Host: 'api.yelp.com',
    'Accept-Encoding': 'gzip, deflate',
    Connection: 'keep-alive',
    'cache-control': 'no-cache'
  },
  processData: false,
  data: ''
};

$.ajax(settings).done(function(response) {
  console.log(response);
});
