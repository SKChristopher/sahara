const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/user');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile('index.html'));

app.post('/verifyUser', userController.verify);
app.post('/createUser', userController.create);

app.listen(process.env.PORT || 3000);
