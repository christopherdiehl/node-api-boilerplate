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
