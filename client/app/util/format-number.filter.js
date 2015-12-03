'use strict';

angular.module('incidentSystemApp')
  .filter('formatNumber', function(utils) {
    return function(input, precision) {
      var opts = null;

      if (precision === 0 || precision) {
        opts = {
          precision: precision
        };
      }

      return utils.formatNumber(input, opts);
    };
  });
