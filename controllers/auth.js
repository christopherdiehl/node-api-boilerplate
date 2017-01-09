// Load required packages
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config');

exports.authenticate = function(req, res) ***REMOVED***
  username = req.body.username;
  password = req.body.password;
  User.findOne(***REMOVED*** username: username ***REMOVED***, function (err, user) ***REMOVED***
    if (err) ***REMOVED*** return callback(err); ***REMOVED***

    // No user found with that username
    if (!user) ***REMOVED*** return callback(null, false); ***REMOVED***

    // Make sure the password is correct
    user.verifyPassword(password, function(err, isMatch) ***REMOVED***
      if (err) ***REMOVED*** return callback(err); ***REMOVED***

      // Password did not match
      if (!isMatch) ***REMOVED*** return callback(null, false); ***REMOVED***
      // Success
      //this is where I need to return an actual token
      const token = jwt.sign(***REMOVED***
        username: user.username
      ***REMOVED***, config.jwtSecret);
      return res.json(***REMOVED***
        token,
        username: user.username
      ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***);

***REMOVED***

exports.isAuthenticated = expressJwt(***REMOVED*** secret: config.jwtSecret ***REMOVED***);

//
// //this is where I need to check the token
// passport.use(new BasicStrategy(
//   function(username, password, callback) ***REMOVED***
//     User.findOne(***REMOVED*** username: username ***REMOVED***, function (err, user) ***REMOVED***
//       if (err) ***REMOVED*** return callback(err); ***REMOVED***
//
//       // No user found with that username
//       if (!user) ***REMOVED*** return callback(null, false); ***REMOVED***
//
//       // Make sure the password is correct
//       user.verifyPassword(password, function(err, isMatch) ***REMOVED***
//         if (err) ***REMOVED*** return callback(err); ***REMOVED***
//
//         // Password did not match
//         if (!isMatch) ***REMOVED*** return callback(null, false); ***REMOVED***
//         // Success
//         return callback(null, user);
//       ***REMOVED***);
//     ***REMOVED***);
//   ***REMOVED***
// ));
//
// exports.isAuthenticated = passport.authenticate('basic', ***REMOVED*** session : false ***REMOVED***);
