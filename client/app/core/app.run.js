'use strict';

/**
 * App Run
 *
 * About Angular module run blocks:
 * Run blocks get executed after the injector is created and are used to kickstart the application.
 * Only instances and constants can be injected into run blocks.
 * This is to prevent further system configuration during application run time.
 */
angular.module('incidentSystemApp')
  .run(function($rootScope, i18n, auth, store, jwtHelper, $state, $location) {
  
    //   $rootScope.$on('$stateChangeStart', function() { //$locationChangeStart
    //   if (!auth.isAuthenticated) {
    //     var token = store.get('token');

    //     if (token) {
    //       if (!jwtHelper.isTokenExpired(token)) {
    //         auth.authenticate(store.get('profile'), token);
    //       } 
    //       else {
    //         $state.go('login');
    //       }
    //     }
    //   }
    // });

    //https://github.com/angular-ui/ui-router/wiki/Quick-Reference
    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
      if (fromParams && fromParams.lang) {
        i18n.setLanguage(fromParams.lang);
      } else if (toParams && toParams.lang) {
        i18n.setLanguage(toParams.lang);
      }
      
      if (!auth.isAuthenticated) {
        var token = store.get('token');

        if (token) {
          if (!jwtHelper.isTokenExpired(token)) {
            auth.authenticate(store.get('profile'), token);
          } 
          else {
            $state.go('login');
          }
        }
        else {
          console.log('user is not authenticated.', $state)
          //$state.go('login', {}, {notify:false});
          //$state.go('login');
          $location.path('/en/login');
          event.preventDefault();
          
        }
      }
      else {
        console.log('user is authenticated.')
      }
    });

    //https://github.com/angular-ui/ui-router/wiki/Quick-Reference
    $rootScope.$on('$stateChangeSuccess', function(evt, toState, toParams, fromState, fromParams) {
     // We can prevent this state from completing
      //evt.preventDefault();
      if (!i18n.getLanguage()) {
        if (toParams && toParams.lang) {
          i18n.setLanguage(toParams.lang);
        }
        else {
          i18n.setLanguage("en");  
        }
      }
    });

    //https://github.com/angular-ui/ui-router/wiki/Quick-Reference
    $rootScope.$on('$stateChangeError', function(evt, toState, toParams, fromState, fromParams) {
      // Generic error handler
      return;
    });
  });
