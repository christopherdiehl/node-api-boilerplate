//server.js
//Super basic rn

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bear= require('./app/models/bear');

//let app use bodyParser() --lets us get data from a POST
app.use(bodyParser.urlencoded(***REMOVED***extended : true***REMOVED***));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
mongoose.connect('localhost:27017'); // connect to our database

//Routes
var router = express.Router();

//middleware
router.use(function(req,res,next) ***REMOVED***
  //do loggin
  console.log('Something happend');
  next();
***REMOVED***)

//test route
router.get('/', function(req,res) ***REMOVED***
  res.json(***REMOVED***message: 'welcome to our api!'***REMOVED***);
***REMOVED***);

//real routes now

router.route('/bears')
  //create a bear
  .post(function(req,res) ***REMOVED***
    var bear = new Bear();
    bear.name = req.body.name;

    //save bear & check for errors
    bear.save(function(err) ***REMOVED***
      if(err)
        res.send(err);

      res.json(***REMOVED***message: 'Bear created!'***REMOVED***);
    ***REMOVED***);
  ***REMOVED***)
  .get(function(req,res) ***REMOVED***
    Bear.find(function(err,bears) ***REMOVED***
      if(err)
        res.send(err);
      res.json(bears);
    ***REMOVED***);
  ***REMOVED***);

router.route('/bears/:bear_id')
  .get(function(req,res) ***REMOVED***
    Bear.findById(req.params.bear_id,function(err,bear) ***REMOVED***
      if(err)
        res.send(err)
      res.json(bear);
    ***REMOVED***)
  ***REMOVED***)
//all routes prefaced with /api
app.use('/api',router);

//Start server

app.listen(port);
console.log('Magic happening on ' + port);
