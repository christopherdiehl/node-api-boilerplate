const userController = require('./controllers/user');
const authController = require('./controllers/auth');

<<<<<<< HEAD
module.exports = (router) => ***REMOVED***

  router.get('/', function(req,res) ***REMOVED***
    res.json(***REMOVED***message: 'welcome to node api boilerplate!'***REMOVED***);
  ***REMOVED***);
=======
module.exports = (router) => {

  router.get('/', function(req,res) {
    res.json({message: 'welcome to node api boilerplate!'});
  });
>>>>>>> 669226f89a01c8b0e3009379be583dc164a860a2

  router.route('/authenticate').
    post(authController.authenticate);

  router.route('/health').
<<<<<<< HEAD
    get(function(req,res) ***REMOVED*** res.sendStatus(200) ***REMOVED***);
=======
    get(function(req,res) { res.sendStatus(200) });
>>>>>>> 669226f89a01c8b0e3009379be583dc164a860a2

  /* Users */
  router.route('/users').
    get(userController.getUsers).
<<<<<<< HEAD
    post(authController.isAuthenticated,userController.postUser);

  router.route('/users/:username').
    get(userController.getUser).
    post(authController.isAuthenticated,userController.replaceUser).
    put(authController.isAuthenticated,userController.updateUser);
***REMOVED***
=======
    post(userController.postUser);

  router.route('/users/:username').
    get(authController.isAuthenticated,userController.getUser).
    post(authController.isAuthenticated,userController.replaceUser).
    put(authController.isAuthenticated,userController.updateUser);
}
>>>>>>> 669226f89a01c8b0e3009379be583dc164a860a2
