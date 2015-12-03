'use strict';

angular.module('incidentSystemApp')
  .directive('userMenu', function($rootScope, brandService, $window, $route, $location, CONFIG, i18n, quoteService, vehicleService) {
    return {
      templateUrl: 'components/layout/user-menu.html',
      restrict: 'EA',
      link: function(scope, element, attrs) {
        scope.language = i18n.getLanguage();

        scope.brand = brandService.getCurrentBrandDetails();

        scope.toggleLanguage = function(lang) {
          $route.updateParams({ lang: scope.language === 'en' ? 'fr' : 'en' });
          $route.reload();
        };

        scope.showDataTargetDropdown = function() {
          return CONFIG.env === 'uat' || CONFIG.debug;
        };

        scope.currentTarget = vehicleService.getDataTarget;

        scope.setDataTarget = function(target) {
          $rootScope.isDataLoading = true;
          $location.path(scope.language + '/quick-quote').search('target', target);
        };

        scope.resetQuote = function() {
          if ($window.location.href.indexOf('quick-quote') >= 0) {
            $window.location.reload();
          } else {
            quoteService.resetCurrent();
            $location.path(scope.language + '/quick-quote');
          }
        };
      }
    };
  });
