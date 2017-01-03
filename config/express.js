
/**
 * Module dependencies.
 */

var express = require('express');
var bodyParser = require('body-parser');
var csrf = require('csurf');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

var winston = require('winston');
var config = require('./');
var pkg = require('../package.json');
var env = process.env.NODE_ENV || 'development';

// Use winston on production
var log;
if (env !== 'development') ***REMOVED***
  log = ***REMOVED***
    stream: ***REMOVED***
      write: function (message, encoding) ***REMOVED***
        winston.info(message);
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;
***REMOVED*** else ***REMOVED***
  log = 'dev';
***REMOVED***

//let app use bodyParser() --lets us get data from a POST
app.use(bodyParser.urlencoded(***REMOVED***extended : true***REMOVED***));
app.use(bodyParser.json());
