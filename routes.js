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

  /*Handle Forgot Password. First need to get a token then post with token sent via email*/
  router.route('/users/resetPassword').
    get(userController.sendResetToken).  //get the reset token. Username sent in params
    post(userController.resetPassword);  //Check if valid token and reset accordingly

  router.route('/users/:username').
    get(userController.getUser).
    post(authController.isAuthenticated,userController.replaceUser).
    put(authController.isAuthenticated,userController.updateUser);


}
