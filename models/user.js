const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema(***REMOVED***
  username: ***REMOVED***
     type: String,
     unique: true,
     required: true
   ***REMOVED***,
   password: ***REMOVED***
     type: String,
     required: true
   ***REMOVED***
***REMOVED***);

// Execute before each user.save() call
UserSchema.pre('save', function(callback) ***REMOVED***
  var user = this;

  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) ***REMOVED***
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) ***REMOVED***
      if (err) return callback(err);
      user.password = hash;
      callback();
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

UserSchema.methods.verifyPassword = function(password, cb) ***REMOVED***
  bcrypt.compare(password, this.password, function(err, isMatch) ***REMOVED***
    if (err) return cb(err);
    cb(null, isMatch);
  ***REMOVED***);
***REMOVED***;

module.exports = mongoose.model('User',UserSchema);
