class Yelp {
    constructor(id) {
        this.id = 'blue-star-cafe-milwaukee';
        this.clientId = 'rkXK0lHa-W5ccUHSrgd2hg';
        this.apiKey = 'LnulvU_jLskBmtPQdn0XDIhhnHjCR8GnMNb2n3MoRk_SK8LmPOQljO_oFm_rMVrLs9GRd84_uoQ38C6-AkUaKEF0is9TaEr-GcMxQwi8W4J9hXG6z4h8jRWpRehrXXYx'
    };

    var myInit = {
        method: 'GET',
        headers: `Authorization: Bearer LnulvU_jLskBmtPQdn0XDIhhnHjCR8GnMNb2n3MoRk_SK8LmPOQljO_oFm_rMVrLs9GRd84_uoQ38C6-AkUaKEF0is9TaEr-GcMxQwi8W4J9hXG6z4h8jRWpRehrXXYx`,
        mode: 'cors',
        cache: 'default',
    }


    async getYelp() {
        header: {
            `Authorization: Bearer ${apiKey}`
        }
        const response = await fetch(
            `https://api.yelp.com/v3/businesses/${this.id}`
        );
        const data = await responseData.json();
        return responseData;
    }
    // // };