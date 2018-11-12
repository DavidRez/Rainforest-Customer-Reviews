var httpProxy = require('http-proxy');
const express = require('express');
let app = express();
var proxy = httpProxy.createProxyServer({
});
let customerReview = 'http://rainforest-customer-reviews.us-west-1.elasticbeanstalk.com/';
let productView = 'http://infinite-beach-71923.herokuapp.com/';
let recommendedProducts = 'http://infinite-beach-71923.herokuapp.com/';
let productAttribute = 'http://productattributes-env.vvzms2trsu.us-east-2.elasticbeanstalk.com/';

app.use(express.static(__dirname + '/../client/dist'));

app.all("/productsdisplay", function(req, res) {
    proxy.web(req, res, {target: customerReview});
});

app.all("/products", function(req, res) {
    proxy.web(req, res, {target: customerReview});
});

app.all("/api/productdata/product", function(req, res) {
    proxy.web(req, res, {target: productAttribute});
});

app.get('/cr/reviews', (req, res) => {
    proxy.web(req, res, {
        target: customerReview
      })
});

app.get('/cr/reviews/:productid', (req, res) => {
    let productid = req.params.productid;
    proxy.web(req, res, {
        target: customerReview
      })
});

app.patch('/cr/reviews/:reviewId', (req, res) => {
    let reviewId = req.params.reviewId;
    proxy.web(req, res, {
        target: customerReview
      })
});

app.get('/cr/images', (req, res) => {
    proxy.web(req, res, {
        target: customerReview
      })
});

app.get('/cr/images/:reviewId', (req, res) => {
    proxy.web(req, res, {
        target: customerReview
      })
});

console.log("listening on port 5050");
app.listen(5050);
