require('dotenv').config();

const express = require('express');
let app = express();
const port = 2000;
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require(__dirname + '/../knexfile.js')[environment];
const database = require('knex')(configuration);

app.use(express.static(__dirname + '/../client/dist'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});

app.get('/cr/reviews', (req, res) => {
    database('customer_review').select()
    .then((reviews) => {
        res.status(200).json(reviews);
    })
    .catch((error) => {
        res.status(500).json({ error });
    });
});

app.get('/cr/reviews/:productid', (req, res) => {
    let productid = req.params.productid;
    database('customer_review').where({product_id: productid}).orderBy('helpful_count','desc').limit(10).select()
    .then((reviews) => {
        res.status(200).json(reviews);
    })
    .catch(() => {
        res.status(200).send([]);
    });
});

app.patch('/cr/reviews/:reviewId', (req, res) => {
    let reviewId = req.params.reviewId;
    console.log('patch');
    database('customer_review').where('id', '=', reviewId).increment('helpful_count' , 1)
    .then((reviews) => {
        res.status(200).json(reviews);
    })
    .catch(() => {
        res.status(200).send([]);
    });
});


app.get('/cr/images', (req, res) => {
    database('customer_review_images').select()
    .then((images) => {
        res.status(200).json(images);
    })
    .catch((error) => {
        res.status(500).json({ error });
    });
});

app.get('/cr/images/:reviewId', (req, res) => {
    let reviewId = req.params.reviewId;
    database('customer_review_images').where({review_id: reviewId}).limit(4).select()
    .then((images) => {
        res.status(200).json(images);
    })
    .catch(() => {
        res.status(200).send([]);
    });
});

app.get('/cr/products', (req, res) => {
    database('product_info').select()
    .then((products) => {
        res.status(200).json(products);
    })
    .catch((error) => {
        res.status(500).json({ error });
    });
});

module.exports = app;