require('dotenv').config();

const express = require('express');
let app = express();
const port = 2000;
const bodyParser = require('body-parser');

//PRODUCT ATTRIBUTES
require('./routes/index')(app);
const models = require('./models/index');
///////////

const environment = process.env.NODE_ENV || 'development';
const configuration = require(__dirname + '/../knexfile.js')[environment];
const database = require('knex')(configuration);

app.use(express.static(__dirname + '/../client/dist'));

//product view and recommended products
const Sequelize = require('sequelize');



///product view
const dbUrl = process.env.DB_URL;
const db2Url = process.env.RECOMMENDED_PRODUCTS_URL;

const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres'
});

const sequelize2 = new Sequelize(db2Url, {
  dialect: 'postgres'
});
//////////

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
    .catch((error) => {
        res.status(500).json({ error });
    });
});

app.patch('/cr/reviews/:reviewId', (req, res) => {
    let reviewId = req.params.reviewId;
    console.log('patch');
    database('customer_review').where('id', '=', reviewId).increment('helpful_count' , 1)
    .then((reviews) => {
        res.status(200).json(reviews);
    })
    .catch((error) => {
        res.status(500).json({ error });
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
    .catch((error) => {
        res.status(500).json({ error });
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

////////PRODUCT VIEW
app.get('/productsdisplay', (req, res) => {
    let productID = req.query.id; // http://localhost:710/productsdisplay?id=91 gets product id 91
    sequelize.query(`SELECT * FROM products WHERE id=${productID};`, {
        type: sequelize.QueryTypes.SELECT
      })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(error);
      });
  });
  
  app.get('/products', (req, res) => {
    sequelize2.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database: ', err);
        res.status(500).send();
      });
    sequelize2.query('SELECT * FROM products ORDER BY id', {
        type: sequelize.QueryTypes.SELECT
      })
      .then(data => {
        res.status(200).send(JSON.stringify(data));
      })
      .catch(err => {
        if (err) throw err;
      });
  });

//PRODUCT ATTRIBUTES

//catch all
app.get('/api', (req, res) =>
  res.status(200).send('successful API connection')
);

module.exports = app;