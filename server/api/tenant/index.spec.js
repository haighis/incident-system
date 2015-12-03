'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var tenantCtrlStub = {
  index: 'tenantCtrl.index',
  show: 'tenantCtrl.show',
  create: 'tenantCtrl.create',
  update: 'tenantCtrl.update',
  destroy: 'tenantCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var tenantIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './tenant.controller': tenantCtrlStub
});

describe('Tenant API Router:', function() {

  it('should return an express router instance', function() {
    tenantIndex.should.equal(routerStub);
  });

  describe('GET /api/tenants', function() {

    it('should route to tenant.controller.index', function() {
      routerStub.get
        .withArgs('/', 'tenantCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/tenants/:id', function() {

    it('should route to tenant.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'tenantCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/tenants', function() {

    it('should route to tenant.controller.create', function() {
      routerStub.post
        .withArgs('/', 'tenantCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/tenants/:id', function() {

    it('should route to tenant.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'tenantCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/tenants/:id', function() {

    it('should route to tenant.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'tenantCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/tenants/:id', function() {

    it('should route to tenant.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'tenantCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
