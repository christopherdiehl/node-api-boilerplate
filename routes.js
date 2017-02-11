const userController = require('./controllers/user');
const authController = require('./controllers/auth');

module.exports = (router) => {

  router.get('/', function(req,res) {
    res.json({message: 'welcome to node api boilerplate!'});
  });

  router.route('/authenticate').
    post(authController.authenticate);

  router.route('/health').
    get(function(req,res) { res.sendStatus(200) });

  /* Users */
  router.route('/users').
    get(userController.getUsers).
    post(userController.postUser);

  router.route('/users/:username').
    get(authController.isAuthenticated,userController.getUser).
    post(authController.isAuthenticated,userController.replaceUser).
    put(authController.isAuthenticated,userController.updateUser);
}
