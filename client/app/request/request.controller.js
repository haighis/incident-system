
(function(app) {

  'use strict';

  app.controller('RequestCtrl', RequestCtrl);

  /* @ngInject */
  function RequestCtrl($scope, CONFIG, CONSTANTS, logger, utils, requestService) {

    var vm = this;

    // Setup the view model, overriding defaults if necessary
    _.assign(vm, {
      result: {},
      search: search
    });

    activate();

    function activate() {
      search();
      logger.debug('Incident controller activated', vm);
    }

    function search() {
      return requestService.getAll().then(function(results) {
        vm.result = results;
        return vm;
      });
    }
  }

}(angular.module('incidentSystemApp')));
