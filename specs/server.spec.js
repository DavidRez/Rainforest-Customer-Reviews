var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var server = require('../server/index.js');
process.env.NODE_ENV = 'test';
chai.use(chaiHttp);

describe('API calls to server', function() {
    it('should respond to GET requests for /api/reviews with 200 status code', function(done) {
      chai.request(server)
      .get('/api/reviews')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
    });
    it('should send back a JSON array', function(done) {
      chai.request(server)
      .get('/api/reviews')
      .end(function(err, res) {
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        done();
      });
    });
    it('should return all customer reviews', function(done) {
      chai.request(server)
      .get('/api/reviews')
      .end(function(err, res) {
        expect(res.body.length).to.be.equal(300);
        done();
      });
    });
    it('should respond to GET requests for /api/reviews/{product_id} with 200 status code', function(done) {
      chai.request(server)
      .get('/api/reviews/1')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
    });
    it('should respond to GET requests for /api/images with 200 status code', function(done) {
      chai.request(server)
      .get('/api/images')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
    });
  });