const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/user');
const authController = require('./controllers/auth');


<<<<<<< HEAD
module.exports = (port) => ***REMOVED***
  var app = express();
  var port = port || 8080;
  var router = express.Router();
  app.use(bodyParser.urlencoded(***REMOVED***extended : true***REMOVED***));
=======
module.exports = (port) => {
  var app = express();
  var port = port || 8080;
  var router = express.Router();
  app.use(bodyParser.urlencoded({extended : true}));
>>>>>>> 669226f89a01c8b0e3009379be583dc164a860a2
  app.use(bodyParser.json());

  /*SETUP ROUTES*/
  require('./routes')(router);


  app.all('/api/protected/*', authController.isAuthenticated); //example of how to protect allroutes after certain url
  app.use('/api',router);

  console.log('Listening on '+port);
  app.listen(port);
<<<<<<< HEAD
***REMOVED***
=======
}
>>>>>>> 669226f89a01c8b0e3009379be583dc164a860a2
