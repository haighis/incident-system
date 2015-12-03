(function(app) {

  'use strict';

  app.service('contextService', contextService);

  /* ngInject */
  function contextService($q, CONFIG, CONSTANTS, $http, logger) {
    var svc = this;
    var _appContext = {};

    _.assign(svc, {
      getAppContext: getAppContext,
      fetchAppContext: fetchAppContext,
    });

    function getAppContext() {
      return _appContext;
    }

    function fetchAppContext() {
      //var deferred = $q.defer();

      // if (_appContext.UserName) {
      //   deferred.resolve(_appContext);
      // } else {
      //   authService.fetchAccessToken().then(function() {
      //     $http.get(CONFIG.contextEndpoint).then(function(resp) {
      //       _.assign(_appContext, resp.data, {
      //         Provinces: _.sortBy(resp.data.Provinces, 'Name'),
      //       });

      //       logger.debug('App context set', _appContext);
      //       brandService.setProductLine(_appContext.ProductLine);
      //       deferred.resolve(_appContext);
      //     }, function(err) {
      //       logger.error(err);
      //       deferred.reject(err);
      //     });
      //   });
      // }

     // return deferred.promise;
    }
  }

}(angular.module('incidentSystemApp')));
