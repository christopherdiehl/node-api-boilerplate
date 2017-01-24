// Load required packages
var User = require('../models/user');

// Create endpoint /api/user for POST
exports.postUser = function(req, res) ***REMOVED***
  var user = new User(***REMOVED***
    username: req.body.username,
    password: req.body.password
  ***REMOVED***);

  user.save(function(err) ***REMOVED***
    if (err)
      ***REMOVED***res.send(err);***REMOVED***

    res.json(***REMOVED*** message: 'Succesfully created new user!' ***REMOVED***);
  ***REMOVED***);
***REMOVED***;

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) ***REMOVED***
  User.find(function(err, users) ***REMOVED***
    if (err)
      ***REMOVED***res.send(err);***REMOVED***
    res.json(users);
  ***REMOVED***);
***REMOVED***;

exports.getUser = function(req, res) ***REMOVED***
  User.findOne(***REMOVED*** username: username ***REMOVED***, function(err,user) ***REMOVED***
    if(err)
      ***REMOVED***res.send(err);***REMOVED***
    res.json(user);
  ***REMOVED***)
***REMOVED***
