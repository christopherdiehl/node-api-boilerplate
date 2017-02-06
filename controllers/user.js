// Load required packages
var User = require('../models/user');

// Create endpoint /api/users for POST
exports.postUsers = function(req, res) {
  var user = new User({
    username: req.body.username,
    password: req.body.password
  });

  user.save(function(err) {
    if (err)
      {res.send(err);}

    res.json({ message: 'Succesfully created new user!' });
  });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
  User.find(function(err, users) {
    if (err)
      {res.send(err);}
    res.json(users);
  });
};

exports.getUser = function(req, res) {
  User.findOne({ username: username }, function(err,user) {
    if(err)
      {res.send(err);}
    res.json(user);
  })
}

exports.sendResetToken = function(req,res) {
  console.log()
  res.json({message: 'hello'});
}
