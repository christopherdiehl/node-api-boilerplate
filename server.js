const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config')
const userController = require('./controllers/user');
const authController = require('./controllers/auth');

exports.createServer = function() {
  var app = express();
  var port = config.port || 8080;
  var router = express.Router();

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
    get(userController.getUsers).
    post(authController.isAuthenticated,userController.postUser);

  router.route('/users/:username').
    get(userController.getUser).
    post(authController.isAuthenticated,userController.replaceUser).
    put(authController.isAuthenticated,userController.updateUser);

  app.all('/api/protected/*', authController.isAuthenticated); //example of how to protect allroutes after certain url
  app.use('/api',router);

  console.log('Listening on '+port);
  app.listen(port);
}
