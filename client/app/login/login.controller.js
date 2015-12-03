
(function(app) {

  'use strict';

  app.controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl($scope, CONFIG, CONSTANTS, i18n, logger, utils, auth, $cookies, $state) {

    var vm = this;

    // Setup the view model, overriding defaults if necessary
    _.assign(vm, {
      doGoogleAuthWithPopup: doGoogleAuthWithPopup
    });

    function doGoogleAuthWithPopup () {
      //$scope.$parent.message = 'loading...';
      $scope.loading = true;

      auth.signin({
        popup: true,
        connection: 'google-oauth2',
        scope: 'openid name email'
      }, onLoginSuccess, onLoginFailed);
    }

    function onLoginSuccess() {
      //$scope.$parent.message = '';
      $state.go('dashboard');
      //$scope.loading = false;
      // todo set the user context
    }

    function onLoginFailed() {
      //$scope.$parent.message = 'invalid credentials';
      //$scope.loading = false;
    }

  }

}(angular.module('incidentSystemApp')));
