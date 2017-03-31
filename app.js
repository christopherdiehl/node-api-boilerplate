const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const userController = require('./controllers/user');
const authController = require('./controllers/auth');
const cors = require('cors');
const logger = require('./logger');

module.exports = (port) => {
  var app = express();
  var port = port || 8080;
  var router = express.Router();

  app.use(cors());
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json());
  app.use(morgan('combined'));

  /*SETUP ROUTES*/
  require('./routes')(router);
  app.all('/api/protected/*', authController.isAuthenticated); //example of how to protect allroutes after certain url
  app.use('/api',router);

  logger.info('Listening on '+port);
  app.listen(port);
}
