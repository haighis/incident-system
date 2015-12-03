'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var TenantSchema = new Schema({
  Name: String,
  Active: Boolean,
  Email: String
});

module.exports = mongoose.model('Tenant', TenantSchema);
