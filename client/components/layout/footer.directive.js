(function(app) {

  'use strict';

  app.directive('wsFooter', wsFooter);

  /* @ngInject */
  function wsFooter(brandService, CONFIG, VERSION, LAST_BUILD) {
    return {
      restrict: 'EA',
      templateUrl: 'components/layout/footer.html',
      link: function(scope, element, attrs) {
        var brandDetails = brandService.getCurrentBrandDetails();
        scope.brand = brandDetails.name;
        scope.appName = _.startCase(CONFIG.name);
        scope.env = CONFIG.env.toUpperCase();
        scope.version = 'v' + VERSION;
        scope.lastBuild = moment(LAST_BUILD).format('ddd MMM Do, HH:mm:ss');
        scope.lastBuildFromNow = moment(LAST_BUILD).fromNow();
      }
    };
  }

}(angular.module('incidentSystemApp')));
