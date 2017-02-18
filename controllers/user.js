// Load required packages
<<<<<<< HEAD
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

exports.replaceUser = function(req,res) ***REMOVED***
  res.json(***REMOVED***message: 'foo'***REMOVED***);
***REMOVED***

exports.updateUser = function(req, res) ***REMOVED***
  User.findOne(***REMOVED***username: username***REMOVED***, function(err, user) ***REMOVED***
    if(err)
      ***REMOVED***res.send(err);***REMOVED***
    user.name = req.body.name;
    user.save(function(err) ***REMOVED***
      if(err)
        ***REMOVED*** res.send(err);***REMOVED***
    ***REMOVED***);
    res.json(user);
  ***REMOVED***)
***REMOVED***


exports.sendResetToken = function(req,res) ***REMOVED***
  console.log()
  res.json(***REMOVED***message: 'hello'***REMOVED***);
***REMOVED***

exports.getUser = function(req, res) ***REMOVED***
  User.findOne(***REMOVED*** username: username ***REMOVED***, function(err,user) ***REMOVED***
    if(err)
      ***REMOVED***res.send(err);***REMOVED***
    res.json(user);
  ***REMOVED***)

***REMOVED***
=======
const User = require('../models').User;

// Create endpoint /api/user for POST
exports.postUser = function(req, res) {
  var user = User.create({
    username: req.body.username,
    password: req.body.password
  }).then((user, created) => {
    res.json(user);
  });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
  User.findAll().then((users) => {
    res.json(users);
  })
};

exports.replaceUser = function(req,res) {
  res.json({message: 'foo'});
}

exports.updateUser = function(req, res) {
  User.findOne({
      where: {
        name: req.body.name
      }
    }).then((user) => {
      user.update({
        name: req.body.name,
      }).then((user) => {res.json(user)});
    }).catch((err) => {
      res.send(401);
    });
}


exports.sendResetToken = function(req,res) {
  console.log()
  res.json({message: 'hello'});
}

exports.getUser = function(req, res) {
  let username = req.params.username;
  User.findOne({
    where: {username: username}
  }).then((user) => {
    if(!user) {
      res.sendStatus(404)
    } else {
      res.json(user);
    }
  }).catch((err) =>{
    console.log(err);
    res.sendStatus(401);
  });

}
>>>>>>> 669226f89a01c8b0e3009379be583dc164a860a2
