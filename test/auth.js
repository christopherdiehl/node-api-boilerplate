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
const user = new User({
  username: user_credential,
  password: user_credential
});
//save user for auth testing
user.save(function(err) {
  if(err) {console.log(err);}
});

describe('/POST auth', () => {
  it('it should return token', (done) => {
    chai.request(test_url).
      get('/api/authenticate').
      field('username',user_credential).
      field('password',user_credential).
      end((err,res) => {
        res.should.have.status(200);
        done();
      })
  });
  it('should not return token for request with no headers',done => {
    chai.request(test_url).
    get('/api/authenticate').
    end((err,res)=> {
      res.should.have.status(404);
    })
  });
  it('should return 401 when invalid password',done =>{
    get('/api/authenticate').
    field('username',user_credential).
    field('password','invalid').
    end((err,res) => {
      res.should.have.status(401);
      done();
    });
  });
});

//remove created user after done testing
user.remove(function(err) {
  if (err) {console.log (err);}
});
