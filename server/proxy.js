var httpProxy = require('http-proxy');
const express = require('express');
let app = express();
var proxy = httpProxy.createProxyServer({});
let customerReview = 'http://localhost:2000';
let productView = 'http://localhost:710';
let recommendedProducts = 'http://localhost:3001';
let productAttribute = 'http://localhost:8000';

app.all("/productsdisplay", function(req, res) {
    proxy.web(req, res, {target: productView});
});

app.all("/products", function(req, res) {
    proxy.web(req, res, {target: recommendedProducts});
});

app.all("/api/productdata/product", function(req, res) {
    proxy.web(req, res, {target: productAttribute});
});

app.all('/', (req, res) => {
    proxy.web(req, res, {
        target: customerReview
      })
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
