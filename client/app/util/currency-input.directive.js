'use strict';

angular.module('incidentSystemApp')
  .directive('currencyInput', function(utils) {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, element, attrs, ngModel) {
        if (!ngModel) {
          return;
        }

        // Parse value read from the DOM and strip special characters
        ngModel.$parsers.push(utils.parseCurrency);

        // Format value for initial display in the DOM
        ngModel.$formatters.push(utils.formatCurrency);

        // Validate parsed number
        ngModel.$validators.currency = function(modelValue, viewValue) {
          return _.isFinite(modelValue);
        };

        element.on('focus', function() {
          element.select();
        });

        // Set the new input value on blur
        element.on('blur', function() {
          if (ngModel.$valid) {
            ngModel.$setViewValue(utils.formatCurrency(ngModel.$modelValue));
            ngModel.$render();
          }
        });
      }
    };
  });
