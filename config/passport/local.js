/*
 *Passport Local Configuration
 *Module Dependencies
*/
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model('User');

/*
 *Expose
*/
module.exports = new LocalStrategy(***REMOVED***
  username: 'email',
  password: 'password'
***REMOVED***,
  function(email,password,done)***REMOVED***
    var options = ***REMOVED***
      criteria: ***REMOVED***email: email***REMOVED***
    ***REMOVED***;
    User.load(options,function(err,user) ***REMOVED***
      if(err) return done(err);
      if(!user) ***REMOVED***
        return done(null,false,***REMOVED***message:'Unkown user'***REMOVED***);
      ***REMOVED***
      if(!user.authenticate(password)) ***REMOVED***
        return done(null,false, ***REMOVED***message:'Invalid Password'***REMOVED***);
      ***REMOVED***
      return done(null,user);
    ***REMOVED***);
  ***REMOVED***
);
