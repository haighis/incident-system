/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/tenants              ->  index
 * POST    /api/tenants              ->  create
 * GET     /api/tenants/:id          ->  show
 * PUT     /api/tenants/:id          ->  update
 * DELETE  /api/tenants/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Tenant = require('./tenant.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function(updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Tenants
exports.index = function(req, res) {
  Tenant.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Tenant from the DB
exports.show = function(req, res) {
  Tenant.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Tenant in the DB
exports.create = function(req, res) {
  Tenant.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Tenant in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Tenant.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Tenant from the DB
exports.destroy = function(req, res) {
  Tenant.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
