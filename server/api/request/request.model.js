'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var RequestSchema = new Schema({
  RequestTypeId: String,
  Status: String,
  ModeId: String,
  RequesterId: String,
  ImpactId: String,
  UrgencyId: String,
  PriorityId: String,
  CategoryId: String,
  DepartmentId: String,
  ProjectId: String,
  Subject: String,
  Description: String,
  Resolution: String,
  ImpactDetails: String,
  Active: Boolean,
  CreatedDate: Date,
  DueByDate: Date,
  RespondedDate: Date,
  CompletedDate: Date
});

module.exports = mongoose.model('Request', RequestSchema);
