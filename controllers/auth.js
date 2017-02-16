// Load required packages
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config');
const User = require('../models').User;

exports.authenticate = function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if(password == null || username == null){
    res.sendStatus(400);
    return;
  }
  User.findOne({
    where: { username: username }
  }).then((user) => {
    // Make sure the password is correct
    if (user.verifyPassword(password)) {
      const token = jwt.sign({
        username: user.username,
        id: user.id
      }, config.jwtSecret);
      res.json({
        success: true,
        token: token,
        username: user.username
      });
    } else {
      //incorrect password
      res.sendStatus(404);
    }
  }).catch((error) => {
    console.error(error);
    res.sendStatus(404);
  });
}

exports.isAuthenticated = expressJwt({ secret: config.jwtSecret });
