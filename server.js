const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/user');
const dataManager = require('./utils/dataManager');
const itemController = require('./controllers/item');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', dataManager.post, (req, res) => res.sendFile('index.html'));

app.post('/verifyUser', userController.verify);
app.post('/createUser', userController.create);

app.get('/getInventory', itemController.get);

app.listen(process.env.PORT || 3000);
