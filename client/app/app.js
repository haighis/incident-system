'use strict';

angular.module('incidentSystemApp', [
  'ngSanitize',
  'ngCookies',
  'ngResource',
  'incidentSystemApp.settings',
  'btford.socket-io',
  'auth0', 
  'angular-jwt', 
  'angular-storage',
  'ui.router',
  'validation.match',
  'ngModal'
]);