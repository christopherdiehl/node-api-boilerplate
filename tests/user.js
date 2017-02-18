const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

/*LOCAL DEPS*/
const User = require('../models').User;

module.exports = (test_url,user_credential) => {

  let user = null;
  describe('#CREATE user', () => {
    it('it should not fail', (done) => {
      User.create({
        username: user_credential,
        password: user_credential
      }).then((user) => {
        console.log(user.username);
        done();
      }).catch((err)=> {
        done(err);
      });
    });
  });

  describe('/POST authenticate', () => {
    it('should return token', (done) => {
      chai.request(test_url).
        post('/api/authenticate').
        set('content-type', 'application/x-www-form-urlencoded').
        send({username:user_credential,password:user_credential}).
        end((err,res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('should not return token', (done) => {
      chai.request(test_url).
        post('/api/authenticate').
        set('content-type', 'application/x-www-form-urlencoded').
        send({username:user_credential,password:'FOOBAR'}).
        end((err,res) => {
          res.should.have.status(404);
          done();
        });
    })
    it('should return 202', (done) => {
      chai.request(test_url).
      post('/api/authenticate').
      end((err,res) =>{
        res.should.have.status(400);
        done();
      });
    })
  });

  describe('#FIND 1', ()=> {
    it('should find the user and assign it to variable',(done) => {
      User.findOne({ where: {username: user_credential}}).
        then((found)=> {user = found; done() }).
        catch((err)=> {done(err)});
    });
  })

  describe ('Reset Token Generation', () => {
    describe('#reset',function() {
      it('should not give a duplicate in 100 tests and no password should have length less than 12',(done)=>{
        let resetTokens = [];
        for (let i = 0; i < 100; i++){
          let resetToken = user.generateResetToken();
          if(resetToken.length < 12){
            done('insufficient resetToken length');
          }
          if (resetTokens.includes(resetToken)) {
            done('Duplicate resetToken after '+i+' resetTokens');
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
}
