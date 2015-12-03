'use strict';

/**
 * App Configuration
 *
 * About Angular module configuration:
 * Configuration blocks get executed during the provider registrations and configuration phase.
 * Only providers and constants can be injected into configuration blocks.
 * This is to prevent accidental instantiation of services before they have been fully configured.
 *
 * CONFIG constant is from a dynamically created incidentSystemAppConfig module found in /client/app-config/index.js
 */
angular.module('incidentSystemApp')
  //.config(function($routeProvider, $locationProvider, $logProvider, $httpProvider, CONFIG) {
    .config(function($stateProvider, $locationProvider, $logProvider, 
      $httpProvider, CONFIG, $urlRouterProvider, authProvider, jwtInterceptorProvider) {

    $urlRouterProvider.otherwise("/en/login");

    authProvider.init({
      domain: 'helpdesktest.auth0.com',
      clientID: '5URw0QJbFgRYtqK8sFD9AFG3HAJvOSWR',
      loginUrl: 'login'
    });

  // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
  // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
  // want to check the delegation-token example

    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('token');
    }
    
    // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
    // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
    // want to check the delegation-token example
    $httpProvider.interceptors.push('jwtInterceptor');

    $httpProvider.interceptors.push('wsLoadingHttpInterceptor');
    $locationProvider.html5Mode(true);
    $logProvider.debugEnabled(CONFIG.debug);

    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  });
