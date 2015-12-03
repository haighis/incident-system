'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var generictypeCtrlStub = {
  index: 'generictypeCtrl.index',
  show: 'generictypeCtrl.show',
  create: 'generictypeCtrl.create',
  update: 'generictypeCtrl.update',
  destroy: 'generictypeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var generictypeIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './generictype.controller': generictypeCtrlStub
});

describe('Generictype API Router:', function() {

  it('should return an express router instance', function() {
    generictypeIndex.should.equal(routerStub);
  });

  describe('GET /api/generictypes', function() {

    it('should route to generictype.controller.index', function() {
      routerStub.get
        .withArgs('/', 'generictypeCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/generictypes/:id', function() {

    it('should route to generictype.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'generictypeCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/generictypes', function() {

    it('should route to generictype.controller.create', function() {
      routerStub.post
        .withArgs('/', 'generictypeCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/generictypes/:id', function() {

    it('should route to generictype.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'generictypeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/generictypes/:id', function() {

    it('should route to generictype.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'generictypeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/generictypes/:id', function() {

    it('should route to generictype.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'generictypeCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
