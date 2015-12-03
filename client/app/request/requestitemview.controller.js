
(function(app) {

  'use strict';

  app.controller('RequestItemViewCtrl', RequestItemViewCtrl);
  
  /* @ngInject */
  function RequestItemViewCtrl($scope, CONFIG, CONSTANTS, logger, utils, requestService) {

    var vm = this;

    // Setup the view model, overriding defaults if necessary
    _.assign(vm, {
      result: {},
      search: search
    });

    activate();

    function activate() {
      search();
    }

    function search() {
      return requestService.getAll().then(function(results) {
        vm.result = results;
        logger.info('Request Item View complete', results);
        return vm;
      });
    }
  }

}(angular.module('incidentSystemApp')));
