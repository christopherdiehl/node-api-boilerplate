const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
mongoose.Promise = require('bluebird');

const UserSchema = new mongoose.Schema(***REMOVED***
  username: ***REMOVED***
     type: String,
     unique: true,
     required: true
   ***REMOVED***,
   password: ***REMOVED***
     type: String,
     required: true
   ***REMOVED***,
   role: ***REMOVED***
     type: String,
     required: true,
     default: 'user'
   ***REMOVED***
***REMOVED***);

// Execute before each user.save() call
UserSchema.pre('save', function(callback) ***REMOVED***
  var user = this;

  // Break out if the password hasn't changed
  if (!user.isModified('password')) ***REMOVED***return callback();***REMOVED***

  // Password changed so we need to hash it
  return bcrypt.genSalt(5, function(err, salt) ***REMOVED***
    if (err) ***REMOVED***return callback(err);***REMOVED***

    return bcrypt.hash(user.password, salt, null, function(err, hash) ***REMOVED***
      if (err) ***REMOVED***return callback(err);***REMOVED***
      user.password = hash;
      return callback();
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

UserSchema.methods.verifyPassword = function(password, cb) ***REMOVED***
  bcrypt.compare(password, this.password, function(err, isMatch) ***REMOVED***
    if (err) ***REMOVED***return cb(err);***REMOVED***
    return cb(null, isMatch);
  ***REMOVED***);
***REMOVED***;

UserSchema.statics.generateNewPassword = function(cb)***REMOVED***
  let new_password = (Math.random().toString(36)+'00000000000000000').slice(2, 14);
  return new_password;
***REMOVED***

module.exports = mongoose.model('User',UserSchema);
