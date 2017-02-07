process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const test_url = 'http://localhost:8080';
const User = require('./models/user');
const user_credential = '_auth_test_';
const mongoose = require('mongoose');
const config = require('./config')

mongoose.connect(config.db);
chai.use(chaiHttp);

/*START APP*/
require('./app')(config.port);

const user = new User({
  username: user_credential,
  password: user_credential
});

describe('Create Test User',function() {
  describe('#save',function() {
    it('should save without error',(done) => {
      user.save(function(err) {
        if (err) {done (err);}
        else {done();}
      });
    });
  });
});

//simple one to start
describe('/GET health', () =>{
  it('it should return 200',(done) => {
    chai.request(test_url).
      get('/api/health').
      end((err,res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('/POST auth', () => {
  it('it should return token', (done) => {
    chai.request(test_url).
      get('/api/health').
      field('username',user_credential).
      field('password',user_credential).
      end((err,res) => {
        res.should.have.status(200);
        done();
      })
  });
});

describe ('Delete Test User', () => {
  describe('#delete',function() {
    it('should delete without error',(done) =>{
      user.remove(function(err) {
        if (err) {done (err);}
        else {done();}
      });
    });
  });
});

describe ('Reset Password', () => {
  describe('#reset',function() {
    it('should not give a duplicate in 100 tests and no password should have length less than 12',(done)=>{
      let passwords = [];
      for (let i = 0; i < 100; i++){
        let password = user.generateNewPassword();
        if(password.length < 12){
          done('insufficient password length');
        }
        if (passwords.includes(password)) {
          done('Duplicate password after '+i+' passwords');
        }
      }
      done();
    });
  });
});
