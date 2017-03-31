// Load required packages
const User = require('../models').User;
const email = require('../email');

// Create endpoint /api/user for POST
exports.postUser = function(req, res) {
  var user = User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }).then((user, created) => {
    res.json(user);
  }).catch((err) =>{
    res.send(400);
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
      return user.update({
        name: req.body.name,
      });
    }).then((user) => {res.json(user)
    }).catch((err) => {
      res.send(401);
    });
}

exports.sendResetToken = function(req,res) {
  const username = req.headers.username;
  User.findOne({
    where: {username: username}
  }).then((user) => {
    let token = user.generateResetToken();
    return user.update({
      resetToken: token,
    });
  }).then((user) => {
    return email.sendResetToken(user.email,user.resetToken);
  }).then((info) => {
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.sendStatus(200);
  }).catch((err) => {
    if(err instanceof TypeError) {
      res.sendStatus(404);
    } else {
      console.error(err);
      res.sendStatus(500);
    }
  });
}
exports.resetPassword = function(req,res) {
  const username = req.headers.username;
  const newPassword = req.headers.password;
  const resetToken = req.headers.resetToken;
  let status = 400;
  User.findOne({
    where: {username: username}
  }).then((user) => {
    if(user.resetToken === resetToken){
      return user.update({
        password: newPassword
      });
      status = 200;
    } 
      throw "INVALID_TOKEN";
    
  }).then((user) => {
    status = 200;
    res.sendStatus(status);
  }).catch((err) => {
    if(err === "INVALID_TOKEN") {
      status = 401;
    } else {
      status = 400;
    }
    res.sendStatus(400);
  });

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
