(function(app) {

  'use strict';

  app.filter('formatDate', formatDateFilter);

  function formatDateFilter() {
    return function(input, formatString) {
      return moment(input).format(formatString);
    };
  }

}(angular.module('incidentSystemApp')));
