// Load required packages
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config');

exports.authenticate = function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username: username }, function (err, user) {
    if (err) {
      console.log(err);
      res.send(417);
    }

    // No user found with that username
    if (!user) {  res.send(404); }

    // Make sure the password is correct
    return user.verifyPassword(password, function(err, isMatch) {
      if (err) { res.send(401); }

      // Password did not match
      if (!isMatch) { return callback(null, false); }
      // Success
      //this is where I need to return an actual token
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
