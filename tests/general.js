/*DEPS*/
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

module.exports = (test_url) => {
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
}
