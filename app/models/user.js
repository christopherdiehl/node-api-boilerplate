const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//================================
// User Schema
//================================
const UserSchema = new Schema(***REMOVED***
  email: ***REMOVED***
    type: String,
    lowercase: true,
    unique: true,
    required: true
  ***REMOVED***,
  password: ***REMOVED***
    type: String,
    required: true
  ***REMOVED***,
  profile: ***REMOVED***
    firstName: ***REMOVED*** type: String ***REMOVED***,
    lastName: ***REMOVED*** type: String ***REMOVED***
  ***REMOVED***,
  role: ***REMOVED***
    type: String,
    enum: ['Member', 'Client', 'Owner', 'Admin'],
    default: 'Member'
  ***REMOVED***,
  resetPasswordToken: ***REMOVED*** type: String ***REMOVED***,
  resetPasswordExpires: ***REMOVED*** type: Date ***REMOVED***
***REMOVED***,
***REMOVED***
  timestamps: true
***REMOVED***);
module.exports = mongoose.model('User', UserSchema);
