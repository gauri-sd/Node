const express = require('express');

const file = require('./routes/routes'); // Imports routes for the products
const app = express();

app.use('/file',file);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port numner ' + port);
});
