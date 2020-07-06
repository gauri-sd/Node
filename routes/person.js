const express = require('express');
const app = express.Router();

const { personController } = require('../controllers');

app.get('/', personController.test);
app.get('/get-all', personController.getPersons);
app.get('/get-one/:id', personController.getPersonById);
app.post('/add', personController.createPerson);
app.put('/update/:id', personController.updatePerson);
app.delete('/delete/:id', personController.deletePerson);

module.exports = app;
