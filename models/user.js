const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
mongoose.Promise = require('bluebird');

const UserSchema = new mongoose.Schema({
  username: {
     type: String,
     unique: true,
     required: true
   },
   password: {
     type: String,
     required: true
   },
   name: {
     type: String,
     required: true,
     default: 'John Doe' //probs best to remove this in production
   },
   role: {
     type: String,
     required: true,
     default: 'user'
   }
});

// Execute before each user.save() call
UserSchema.pre('save', function(callback) {
  var user = this;

  // Break out if the password hasn't changed
  if (!user.isModified('password')) {return callback();}

  // Password changed so we need to hash it
  return bcrypt.genSalt(5, function(err, salt) {
    if (err) {return callback(err);}

    return bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {return callback(err);}
      user.password = hash;
      return callback();
    });
  });
});

UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) {return cb(err);}
    return cb(null, isMatch);
  });
};

module.exports = mongoose.model('User',UserSchema);
