const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config')
var userController = require('./controllers/user');

mongoose.connect(config.db);

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var port = config.port || 8080;
var router = express.Router();

//test route
router.get('/', function(req,res) {
  res.json({message: 'welcome to our api!'});
});

// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

app.use('/api',router);
app.listen(port);
