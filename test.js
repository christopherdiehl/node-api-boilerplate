process.env.NODE_ENV = 'test';
/*DEPS*/
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

/*LOCAL FILES*/
const config = require('./config')
const User = require('./models').User;
/*CONSTANTS*/
const test_url = 'http://localhost:'+config.port;
const user_credential = '_auth_test_';
/*SETUP SERVER*/
chai.use(chaiHttp);
require('./app')(config.port);

let user = null;
//simple one to start

require('./tests/general.js');

describe('#CREATE user', () => {
  it('it should not fail', (done) => {
    User.create({
      username: user_credential,
      password: user_credential
    }).then((user) => {
      done();
    }).catch((err)=> {
      done(err);
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

describe('#FIND 1', ()=> {
  it('should find the user and assign it to variable',(done) => {
    User.findOne({ where: {username: user_credential}}).
      then((found)=> {user = found; done() }).
      catch((err)=> {done(err)});
  });
})

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

describe ('Delete Test User', () => {
  describe('#delete',function() {
    it('should delete without error',(done) =>{
      user.destroy().then(()=>{
        done();
      }).catch((err)=> { done(err)});
    });
  });
});
