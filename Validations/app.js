const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/routes'); // Imports routes for the products
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port numner ' + port);
});
