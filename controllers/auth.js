// Load required packages
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config');

exports.authenticate = function(req, res) ***REMOVED***
  const username = req.body.username;
  const password = req.body.password;
  User.findOne(***REMOVED*** username: username ***REMOVED***, function (err, user) ***REMOVED***
    if (err) ***REMOVED***
      console.log(err);
      res.send(417);
    ***REMOVED***

    // No user found with that username
    if (!user) ***REMOVED***  res.send(404); ***REMOVED***

    // Make sure the password is correct
    return user.verifyPassword(password, function(err, isMatch) ***REMOVED***
      if (err) ***REMOVED*** res.send(401); ***REMOVED***

      // Password did not match
      if (!isMatch) ***REMOVED*** return callback(null, false); ***REMOVED***
      // Success
      //this is where I need to return an actual token
      const token = jwt.sign(***REMOVED***
        username: user.username
      ***REMOVED***, config.jwtSecret);
      return res.json(***REMOVED***
        success: true,
        token: token,
        username: user.username
      ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***);

***REMOVED***

exports.isAuthenticated = expressJwt(***REMOVED*** secret: config.jwtSecret ***REMOVED***);
