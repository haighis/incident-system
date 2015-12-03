'use strict';

angular.module('incidentSystemApp')
  .config(function($stateProvider) {

 $stateProvider
      .state('signup', {
        url: '/:lang/signup',
        templateUrl: 'app/signup/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'vm'
      });

});