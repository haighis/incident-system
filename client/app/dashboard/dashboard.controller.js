
(function(app) {

  'use strict';

  app.controller('DashboardCtrl', DashboardCtrl);

  /* @ngInject */
  function DashboardCtrl($scope, CONFIG, CONSTANTS, i18n, logger, utils, auth, contextService) {

    var vm = this;

    // Setup the view model, overriding defaults if necessary
    _.assign(vm, {
      profile: {},
      tenant: {}
    });

    activate();

    function activate() {
      if(auth && auth.profilePromise) {
        auth.profilePromise.then(function() {
          vm.profile = auth.profile;
        });
      }
    }
  }

}(angular.module('incidentSystemApp')));
