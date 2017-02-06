process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const test_url = 'http://localhost:8080';
const User = require('../models/user');
const user_credential = '_auth_test_';

chai.use(chaiHttp);
server.createServer()
const user = new User(***REMOVED***
  username: user_credential,
  password: user_credential
***REMOVED***);
//save user for auth testing
user.save(function(err) ***REMOVED***
  if(err) ***REMOVED***console.log(err);***REMOVED***
***REMOVED***);

describe('/POST auth', () => ***REMOVED***
  it('it should return token', (done) => ***REMOVED***
    chai.request(test_url).
      get('/api/authenticate').
      field('username',user_credential).
      field('password',user_credential).
      end((err,res) => ***REMOVED***
        res.should.have.status(200);
        done();
      ***REMOVED***)
  ***REMOVED***);
  it('should not return token for request with no headers',done => ***REMOVED***
    chai.request(test_url).
    get('/api/authenticate').
    end((err,res)=> ***REMOVED***
      res.should.have.status(404);
    ***REMOVED***)
  ***REMOVED***);
  it('should return 401 when invalid password',done =>***REMOVED***
    get('/api/authenticate').
    field('username',user_credential).
    field('password','invalid').
    end((err,res) => ***REMOVED***
      res.should.have.status(401);
      done();
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

//remove created user after done testing
user.remove(function(err) ***REMOVED***
  if (err) ***REMOVED***console.log (err);***REMOVED***
***REMOVED***);
