// Load required packages
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config');

exports.authenticate = function(req, res) {
  username = req.body.username;
  password = req.body.password;
  User.findOne({ username: username }, function (err, user) {
    if (err) { return callback(err); }

    // No user found with that username
    if (!user) { return callback(null, false); }

    // Make sure the password is correct
    user.verifyPassword(password, function(err, isMatch) {
      if (err) { return callback(err); }

      // Password did not match
      if (!isMatch) { return callback(null, false); }
      // Success
      //this is where I need to return an actual token
      console.log(config.jwtSecret);
      const token = jwt.sign({
        username: user.username
      }, config.jwtSecret);
      return res.json({
        success: true,
        token: token,
        username: user.username
      });
    });
  });

}

exports.isAuthenticated = expressJwt({ secret: config.jwtSecret });

//
// //this is where I need to check the token
// passport.use(new BasicStrategy(
//   function(username, password, callback) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return callback(err); }
//
//       // No user found with that username
//       if (!user) { return callback(null, false); }
//
//       // Make sure the password is correct
//       user.verifyPassword(password, function(err, isMatch) {
//         if (err) { return callback(err); }
//
//         // Password did not match
//         if (!isMatch) { return callback(null, false); }
//         // Success
//         return callback(null, user);
//       });
//     });
//   }
// ));
//
// exports.isAuthenticated = passport.authenticate('basic', { session : false });
