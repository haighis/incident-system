(function(app) {

  'use strict';

  app.directive('pageLoader', pageLoader);

  function pageLoader() {
    return {
      templateUrl: 'components/layout/page-loader.html',
      restrict: 'EA',
      link: function(scope, element, attrs) {}
    };
  }


}(angular.module('incidentSystemApp')));
