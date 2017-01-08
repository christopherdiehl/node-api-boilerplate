// Load required packages
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/user');

passport.use(new BasicStrategy(
  function(username, password, callback) ***REMOVED***
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
        return callback(null, user);
      ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***
));

exports.isAuthenticated = passport.authenticate('basic', ***REMOVED*** session : false ***REMOVED***);
