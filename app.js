// const yelp = new Yelp();
const ui = new UI();

function getYelp() {
    yelp.getYelp()
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err));

}