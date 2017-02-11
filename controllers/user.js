// Load required packages
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
