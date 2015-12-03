'use strict';

var app = require('../..');
var request = require('supertest');

var newGenerictype;

describe('Generictype API:', function() {

  describe('GET /api/generictypes', function() {
    var generictypes;

    beforeEach(function(done) {
      request(app)
        .get('/api/generictypes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          generictypes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      generictypes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/generictypes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/generictypes')
        .send({
          name: 'New Generictype',
          info: 'This is the brand new generictype!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newGenerictype = res.body;
          done();
        });
    });

    it('should respond with the newly created generictype', function() {
      newGenerictype.name.should.equal('New Generictype');
      newGenerictype.info.should.equal('This is the brand new generictype!!!');
    });

  });

  describe('GET /api/generictypes/:id', function() {
    var generictype;

    beforeEach(function(done) {
      request(app)
        .get('/api/generictypes/' + newGenerictype._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          generictype = res.body;
          done();
        });
    });

    afterEach(function() {
      generictype = {};
    });

    it('should respond with the requested generictype', function() {
      generictype.name.should.equal('New Generictype');
      generictype.info.should.equal('This is the brand new generictype!!!');
    });

  });

  describe('PUT /api/generictypes/:id', function() {
    var updatedGenerictype

    beforeEach(function(done) {
      request(app)
        .put('/api/generictypes/' + newGenerictype._id)
        .send({
          name: 'Updated Generictype',
          info: 'This is the updated generictype!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedGenerictype = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedGenerictype = {};
    });

    it('should respond with the updated generictype', function() {
      updatedGenerictype.name.should.equal('Updated Generictype');
      updatedGenerictype.info.should.equal('This is the updated generictype!!!');
    });

  });

  describe('DELETE /api/generictypes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/generictypes/' + newGenerictype._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when generictype does not exist', function(done) {
      request(app)
        .delete('/api/generictypes/' + newGenerictype._id)
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
