//server.js
//Super basic rn

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bear= require('./models/bear');

//let app use bodyParser() --lets us get data from a POST
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
mongoose.connect('localhost:27017'); // connect to our database

//Routes
var router = express.Router();

//middleware
router.use(function(req,res,next) {
  //do loggin
  console.log('Something happend');
  next();
})

//test route
router.get('/', function(req,res) {
  res.json({message: 'welcome to our api!'});
});

//real routes now

router.route('/bears')
  //create a bear
  .post(function(req,res) {
    var bear = new Bear();
    bear.name = req.body.name;

    //save bear & check for errors
    bear.save(function(err) {
      if(err)
        res.send(err);

      res.json({message: 'Bear created!'});
    });
  })
  .get(function(req,res) {
    Bear.find(function(err,bears) {
      if(err)
        res.send(err);
      res.json(bears);
    });
  });

router.route('/bears/:bear_id')
  .get(function(req,res) {
    Bear.findById(req.params.bear_id,function(err,bear) {
      if(err)
        res.send(err)
      res.json(bear);
    })
  })
//all routes prefaced with /api
app.use('/api',router);

//Start server

app.listen(port);
console.log('Magic happening on ' + port);
