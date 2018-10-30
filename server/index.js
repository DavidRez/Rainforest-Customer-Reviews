const express = require('express');
let app = express();
const port = 5000;
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require(__dirname + '/../knexfile.js')[environment];
const database = require('knex')(configuration);

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});

app.get('/api/reviews/:productid', (req, res) => {
    let productid = req.params.productid;
    console.log('getting product reviews');
    database('customer_review').where({product_id: productid}).orderBy('helpful_count','desc').limit(10).select()
    .then((reviews) => {
        res.status(200).json(reviews);
    })
    .catch((error) => {
        res.status(500).json({ error });
    });
});

app.get('/api/reviews', (req, res) => {
    database('customer_review').select()
    .then((reviews) => {
        res.status(200).json(reviews);
    })
    .catch((error) => {
        res.status(500).json({ error });
    });
});


app.get('/api/images', (req, res) => {
    database('customer_review_images').select()
    .then((images) => {
        res.status(200).json(images);
    })
    .catch((error) => {
        res.status(500).json({ error });
    });
});

app.get('/api/products', (req, res) => {
    database('product_info').select()
    .then((products) => {
        res.status(200).json(products);
    })
    .catch((error) => {
        res.status(500).json({ error });
    });
});
