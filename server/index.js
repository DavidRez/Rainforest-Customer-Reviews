const express = require('express');
let app = express();
const port = 5000;
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});
