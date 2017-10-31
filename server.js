const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

const itemController = require('./controllers/item');
const dataManager = require('./utils/dataManager');
const userController = require('./controllers/user');
const purchaseController = require('./controllers/purchase');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile('index.html'));
app.get('*', dataManager.post);

app.get('/getInventory', itemController.get);

app.post('/verifyUser', userController.verify);
app.post('/createUser', userController.create);

app.post('/confirmPurchase', purchaseController.create);

app.listen(process.env.PORT || 3000);
