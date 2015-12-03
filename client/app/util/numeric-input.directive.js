'use strict';

angular.module('incidentSystemApp')
  .directive('numericInput', function(utils) {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, element, attrs, ngModel) {
        var opts;

        if (!ngModel) {
          return;
        }

        opts = {
          precision: attrs.precision || 0
        };

        element.on('focus', function() {
          element.select();
        });

        // Parse value read from the DOM into a number
        ngModel.$parsers.push(function(input) {
          return utils.parseNumber(input, opts);
        });

        // Format value for initial display in the DOM
        ngModel.$formatters.push(function(input) {
          return utils.formatNumber(input, opts);
        });

        // Validate parsed number
        ngModel.$validators.number = function(modelValue, viewValue) {
          return _.isFinite(modelValue);
        };

        // Set the new input value on blur
        element.on('blur', function() {
          if (ngModel.$valid) {
            ngModel.$setViewValue(utils.formatNumber(ngModel.$modelValue, opts));
            ngModel.$render();
          }
        });
      }
    };
  });
