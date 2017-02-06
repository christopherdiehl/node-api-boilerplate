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

describe('Create Test User',function() ***REMOVED***
  describe('#save',function() ***REMOVED***
    it('should save without error',(done) => ***REMOVED***
      user.save(function(err) ***REMOVED***
        if (err) ***REMOVED***done (err);***REMOVED***
        else ***REMOVED***done();***REMOVED***
      ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

//simple one to start
describe('/GET health', () =>***REMOVED***
  it('it should return 200',(done) => ***REMOVED***
    chai.request(test_url).
      get('/api/health').
      end((err,res) => ***REMOVED***
        res.should.have.status(200);
        done();
      ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

describe('/POST auth', () => ***REMOVED***
  it('it should return token', (done) => ***REMOVED***
    chai.request(test_url).
      get('/api/health').
      field('username',user_credential).
      field('password',user_credential).
      end((err,res) => ***REMOVED***
        res.should.have.status(200);
        done();
      ***REMOVED***)
  ***REMOVED***);
***REMOVED***);

describe ('Delete Test User', () => ***REMOVED***
  describe('#delete',function() ***REMOVED***
    it('should delete without error',(done) =>***REMOVED***
      user.remove(function(err) ***REMOVED***
        if (err) ***REMOVED***done (err);***REMOVED***
        else ***REMOVED***done();***REMOVED***
      ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

describe ('Reset Password', () => ***REMOVED***
  describe('#reset',function() ***REMOVED***
    it('should not give a duplicate in 100 tests and no password should have length less than 12',(done)=>***REMOVED***
      let passwords = [];
      for (let i = 0; i < 100; i++)***REMOVED***
        let password = user.generateNewPassword();
        if(password.length < 12)***REMOVED***
          done('insufficient password length');
        ***REMOVED***
        if (passwords.includes(password)) ***REMOVED***
          done('Duplicate password after '+i+' passwords');
        ***REMOVED***
      ***REMOVED***
      done();
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***);
