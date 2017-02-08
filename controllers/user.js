// Load required packages
const User = require('../models').User;

// Create endpoint /api/user for POST
exports.postUser = function(req, res) {
  console.log('made it to save user!');
  var user = User.create({
    username: req.body.username,
    password: req.body.password
  }).then((user, created) => {
    console.log(user.username);
    res.json(user);
  });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
  User.findOne(function(err, users) {
    if (err)
      {res.send(err);}
    res.json(users);
  });
};

exports.replaceUser = function(req,res) {
  res.json({message: 'foo'});
}

exports.updateUser = function(req, res) {
  User.findOne({ where: { name: req.body.name} }).then((user) => {
    user.update({
      name: req.body.name,
    });
    res.json(user);
  }).catch((err) =>{
    console.log(err);
  });
}


exports.sendResetToken = function(req,res) {
  console.log()
  res.json({message: 'hello'});
}

exports.getUser = function(req, res) {
  User.findOne({ username: username }, function(err,user) {
    if(err)
      {res.send(err);}
    res.json(user);
  })

}
