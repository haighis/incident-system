
(function(app) {

  'use strict';

  app.controller('IncidentItemNewCtrl', IncidentItemNewCtrl);
  
  /* @ngInject */
  function IncidentItemNewCtrl($scope, CONFIG, CONSTANTS, logger, utils, incidentService) {

    var vm = this;

    // Setup the view model, overriding defaults if necessary
    _.assign(vm, {
      save: save
    });

    activate();

    function activate() {
     
    }

    function save() {
      //incidentService.add(vm.incidentItem).then(function (result) {
       // logger.info('Request Successfully Saved.');
      //});
      close({});
    }
  }

}(angular.module('incidentSystemApp')));
