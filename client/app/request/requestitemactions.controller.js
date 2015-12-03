
(function(app) {

  'use strict';

  app.controller('RequestItemActionsCtrl', RequestItemActionsCtrl);
  
  /* @ngInject */
  function RequestItemActionsCtrl($scope, CONFIG, CONSTANTS, logger, utils, requestService, request) {

    var vm = this;

    // Setup the view model, overriding defaults if necessary
    _.assign(vm, {
      request: request
    });
  }

}(angular.module('incidentSystemApp')));
