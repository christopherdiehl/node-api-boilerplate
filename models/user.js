<<<<<<< HEAD
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
   name: ***REMOVED***
     type: String,
     required: true,
     default: 'John Doe' //probs best to remove this in production
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

UserSchema.methods.generateNewPassword = function(cb)***REMOVED***
  let new_password = (Math.random().toString(36)+'00000000000000000').slice(2, 14);
  return new_password;
***REMOVED***

module.exports = mongoose.model('User',UserSchema);
=======
const bcrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: 'ADMIN',
    }
  }, {
    hooks: {
      beforeCreate: (user,options) => {
        console.log('about to create');
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(), null);
      },
      beforeSave: (user,options) => {
        console.log('about to save');
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(), null);
      }
    },
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      },
    },
    freezeTableName: true,
    instanceMethods: {
      verifyPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      },
      generateNewPassword: function() {
        return (Math.random().toString(36)+'00000000000000000').slice(2, 14);
      }
    }
  });
  return User;
};
>>>>>>> 669226f89a01c8b0e3009379be583dc164a860a2
