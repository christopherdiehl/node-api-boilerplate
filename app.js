const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/user');
const authController = require('./controllers/auth');
const cors = require('cors');

module.exports = (port) => {
  var app = express();
  app.use(cors());
  var port = port || 8080;
  var router = express.Router();
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json());

  /*SETUP ROUTES*/
  require('./routes')(router);


  app.all('/api/protected/*', authController.isAuthenticated); //example of how to protect allroutes after certain url
  app.use('/api',router);

  console.log('Listening on '+port);
  app.listen(port);
}
