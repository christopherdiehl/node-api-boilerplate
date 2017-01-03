'use strict';

/*
 *Passport Configuration
 *Module Dependencies
*/

const mongoose = require('mongoose');
const local = require('./passport/local');
const User = mongoose.model('User');

/**
 * Expose
 */

module.exports = function(passport) ***REMOVED***
  // serialize and deserialize sessions
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => User.findOne(***REMOVED*** _id: id ***REMOVED***, done));

  // use these strategies
  passport.use(local);
***REMOVED***
