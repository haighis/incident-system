'use strict';

angular.module('incidentSystemApp')
  .constant('CONSTANTS', {
    REQUEST_STATUS: {
      OPEN: {
        val: 'open',
        label: 'Open',
      },
      RESOLVED: {
        val: 'resolved',
        label: 'Resolved',
      },
      IN_PROGRESS: {
        val: 'inprogress',
        label: 'In Progress',
      },
      IN_PROGRESS: {
        val: 'inprogress',
        label: 'In Progress',
      }
    },
    GENERIC_TYPE_TAG: {
      REQUEST_TYPE: 'request_type',
      MODE: 'mode',
      URGENCY: 'urgency',
      PRIORITY: 'priority',
      CATEGORY: 'category',
      IMPACT: 'impact',
      DEPARTMENT: 'department'
    },
  });