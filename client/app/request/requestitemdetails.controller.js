
(function(app) {

  'use strict';

  app.controller('RequestItemDetailsCtrl', RequestItemDetailsCtrl);
  
  /* @ngInject */
  function RequestItemDetailsCtrl($scope, CONFIG, CONSTANTS, logger, utils, requestService, request) {

    var vm = this;

    // Setup the view model, overriding defaults if necessary
    _.assign(vm, {
      request: request
    });
  }

}(angular.module('incidentSystemApp')));
