
(function(app) {

  'use strict';

  app.controller('SignupCtrl', SignupCtrl);

  /* @ngInject */
  function SignupCtrl($scope, CONFIG, CONSTANTS, i18n, logger, utils, auth) {

    var vm = this;

    // Setup the view model, overriding defaults if necessary
    _.assign(vm, {
    
    });

    // Signup the user. If they auth properly then in sign success we will:
    // 1. Create the tenant via tenant service store the profile email account in tenant record.
    // - after signup send the user to the login page.
    // - associate permissions to user. do we need a user entity to contain their permissions?

    // login changes
    // - assign permissions. Add assign permissions to the app context.. see how worksheets does this.

    // TODO
    // 2. update the app context to inject the tenant service. 
    // - allow to get the current tenant from app context

    // Permissions 
    // - have permissions that will determine with ui features are enabled. 
    // HelpDesk System Manager - can add tenant. - later futures. 
    
    // HelpDesk Owner - can do everything. Can add HelpDesk User's. Can send enroll codes.

    // HelpDesk User - can only submit requests. These user's can enroll via enroll code and then submit requests. 
    // - look at worksheets to see how permissions are done.


    // Update requests to only pull the requests for the current tenant.
  }

}(angular.module('incidentSystemApp')));
