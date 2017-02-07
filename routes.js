const userController = require('./controllers/user');
const authController = require('./controllers/auth');

module.exports = (router) => ***REMOVED***

  router.get('/', function(req,res) ***REMOVED***
    res.json(***REMOVED***message: 'welcome to node api boilerplate!'***REMOVED***);
  ***REMOVED***);

  router.route('/authenticate').
    post(authController.authenticate);

  router.route('/health').
    get(function(req,res) ***REMOVED*** res.sendStatus(200) ***REMOVED***);

  /* Users */
  router.route('/users').
    get(userController.getUsers).
    post(authController.isAuthenticated,userController.postUser);

  router.route('/users/:username').
    get(userController.getUser).
    post(authController.isAuthenticated,userController.replaceUser).
    put(authController.isAuthenticated,userController.updateUser);
***REMOVED***
