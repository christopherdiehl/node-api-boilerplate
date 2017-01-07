// Load required packages
var User = require('../models/user');

// Create endpoint /api/users for POST
exports.postUsers = function(req, res) ***REMOVED***
  var user = new User(***REMOVED***
    username: req.body.username,
    password: req.body.password
  ***REMOVED***);

  user.save(function(err) ***REMOVED***
    if (err)
      res.send(err);

    res.json(***REMOVED*** message: 'Succesfully created new user!' ***REMOVED***);
  ***REMOVED***);
***REMOVED***;

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) ***REMOVED***
  User.find(function(err, users) ***REMOVED***
    if (err)
      res.send(err);
    res.json(users);
  ***REMOVED***);
***REMOVED***;
