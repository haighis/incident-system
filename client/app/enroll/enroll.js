'use strict';

angular.module('incidentSystemApp')
  .config(function($stateProvider) {

 $stateProvider
      .state('enroll', {
        url: '/:lang/enroll',
        templateUrl: 'app/enroll/enroll.html',
        controller: 'EnrollCtrl',
        controllerAs: 'vm'
      });

});