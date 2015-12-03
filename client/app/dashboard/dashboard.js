'use strict';

angular.module('incidentSystemApp')
  .config(function($stateProvider) {

 $stateProvider
      .state('dashboard', {
        url: '/:lang/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'vm',
        data: {
	      requiresLogin: true
	    }
      });
});
