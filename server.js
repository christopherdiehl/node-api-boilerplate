const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config')
const userController = require('./controllers/user');
const authController = require('./controllers/auth');

exports.createServer = function() {
  var app = express();
  var port = config.port || 8080;
  var router = express.Router();

  mongoose.connect(config.db);
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json());

  /*Routes*/
  //test route
  router.get('/', function(req,res) {
    res.json({message: 'welcome to node api boilerplate!'});
  });

  router.route('/authenticate').
    post(authController.authenticate);

  router.route('/health').
    get(function(req,res) { res.sendStatus(200) });

  // Create endpoint handlers for /users
  router.route('/users').
    post(userController.postUsers).
    get(authController.isAuthenticated,userController.getUsers);

  router.route('/protected/user/:username').
    get(userController.getUser).
    post(userController.postUsers);



  app.all('/api/protected/*', authController.isAuthenticated);
  app.use('/api',router);

  console.log('Listening on '+port);
  app.listen(port);
}
