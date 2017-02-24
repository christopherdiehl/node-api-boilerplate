// Load required packages
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const User = require('../models').User;
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

exports.authenticate = function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if(password && username) {
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
  } else {
    res.sendStatus(400);
  }
}

exports.isAuthenticated = expressJwt({ secret: config.jwtSecret });
