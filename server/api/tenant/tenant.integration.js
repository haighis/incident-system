'use strict';

var app = require('../..');
var request = require('supertest');

var newTenant;

describe('Tenant API:', function() {

  describe('GET /api/tenants', function() {
    var tenants;

    beforeEach(function(done) {
      request(app)
        .get('/api/tenants')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          tenants = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      tenants.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/tenants', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/tenants')
        .send({
          name: 'New Tenant',
          info: 'This is the brand new tenant!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newTenant = res.body;
          done();
        });
    });

    it('should respond with the newly created tenant', function() {
      newTenant.name.should.equal('New Tenant');
      newTenant.info.should.equal('This is the brand new tenant!!!');
    });

  });

  describe('GET /api/tenants/:id', function() {
    var tenant;

    beforeEach(function(done) {
      request(app)
        .get('/api/tenants/' + newTenant._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          tenant = res.body;
          done();
        });
    });

    afterEach(function() {
      tenant = {};
    });

    it('should respond with the requested tenant', function() {
      tenant.name.should.equal('New Tenant');
      tenant.info.should.equal('This is the brand new tenant!!!');
    });

  });

  describe('PUT /api/tenants/:id', function() {
    var updatedTenant

    beforeEach(function(done) {
      request(app)
        .put('/api/tenants/' + newTenant._id)
        .send({
          name: 'Updated Tenant',
          info: 'This is the updated tenant!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTenant = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTenant = {};
    });

    it('should respond with the updated tenant', function() {
      updatedTenant.name.should.equal('Updated Tenant');
      updatedTenant.info.should.equal('This is the updated tenant!!!');
    });

  });

  describe('DELETE /api/tenants/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/tenants/' + newTenant._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when tenant does not exist', function(done) {
      request(app)
        .delete('/api/tenants/' + newTenant._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
