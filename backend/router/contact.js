const express = require('express');
const route = express.Router();
const contactList = require('../controller/contact');

route.post('/contactlist',contactList.add);
route.get('/contactlist',contactList.getAll);
route.get('/contactlist/:id',contactList.getContact);
route.put('/contactlist/:id',contactList.update);
route.delete('/contactlist/:id',contactList.delete);
route.get('/contactlist/:page/:limit/:search',contactList.pagination);

module.exports = route;