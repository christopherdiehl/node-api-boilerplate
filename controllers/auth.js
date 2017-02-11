// Load required packages
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config');
const User = require('../models').User;

exports.authenticate = function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({
    where: { username: username }
  }).then((user) => {
    // Make sure the password is correct
    if (user.verifyPassword(password)) {
      const token = jwt.sign({
        username: user.username
      }, config.jwtSecret);
      return res.json({
        success: true,
        token: token,
        username: user.username
      });
    }
  }).catch((error) => {
    console.error(error);
    res.sendStatus(404);
  });
}

exports.isAuthenticated = expressJwt({ secret: config.jwtSecret });
