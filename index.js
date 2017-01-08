const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config')
const userController = require('./controllers/user');
const passport = require('passport');
const authController = require('./controllers/auth');

mongoose.connect(config.db);

var app = express();

app.use(bodyParser.urlencoded(***REMOVED***extended : true***REMOVED***));
app.use(bodyParser.json());
app.use(passport.initialize());

var port = config.port || 8080;
var router = express.Router();

//test route
router.get('/', function(req,res) ***REMOVED***
  res.json(***REMOVED***message: 'welcome to our api!'***REMOVED***);
***REMOVED***);

router.route('/authenticate')
  .post(authController.authenticate);
  
// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated,userController.getUsers);

app.use('/api',router);
console.log('Listening on '+port);
app.listen(port);
