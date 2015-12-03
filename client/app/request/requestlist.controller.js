
(function(app) {

  'use strict';

  app.controller('RequestListCtrl', RequestListCtrl);
  
  /* @ngInject */
  function RequestListCtrl($scope, CONFIG, CONSTANTS, logger, utils, requestService, genericTypeService, projectService) {

    var vm = this;

    // Setup the view model, overriding defaults if necessary
    _.assign(vm, {
      result: {},
      request: {},
      incidentItem: {},
      search: search,
      addRequestDialogShown: false,
      addRequestSave: addRequestSave,
      showAddRequestModal: showAddRequestModal
    });

    vm.requestOptions = _.assign({
      requestTypeOptions: {},
      statusOptions: angular.copy(CONSTANTS.REQUEST_STATUS),
      departmentOptions: {},
      urgencyOptions: {},
      categoryOptions: {},
      priorityOptions: {},
      modeOptions: {},
      impactOptions: {},
      projectOptions: {},
    });
    
    activate();

    function activate() {
      search();

      genericTypeService.getByType(CONSTANTS.GENERIC_TYPE_TAG.REQUEST_TYPE).then(function(response) {
         vm.requestOptions.requestTypeOptions = response;
      }); 

      genericTypeService.getByType(CONSTANTS.GENERIC_TYPE_TAG.DEPARTMENT).then(function(response) {
         vm.requestOptions.departmentOptions = response;
      }); 

      genericTypeService.getByType(CONSTANTS.GENERIC_TYPE_TAG.URGENCY).then(function(response) {
         vm.requestOptions.urgencyOptions = response;
      }); 

      genericTypeService.getByType(CONSTANTS.GENERIC_TYPE_TAG.CATEGORY).then(function(response) {
         vm.requestOptions.categoryOptions = response;
      }); 

      genericTypeService.getByType(CONSTANTS.GENERIC_TYPE_TAG.PRIORITY).then(function(response) {
         vm.requestOptions.priorityOptions = response;
      }); 

      genericTypeService.getByType(CONSTANTS.GENERIC_TYPE_TAG.MODE).then(function(response) {
         vm.requestOptions.modeOptions = response;
      }); 

      genericTypeService.getByType(CONSTANTS.GENERIC_TYPE_TAG.IMPACT).then(function(response) {
         vm.requestOptions.impactOptions = response;
      }); 

      projectService.getAll().then(function(response) {
        vm.requestOptions.projectOptions = response;
      });
    }

    function search() {
      return requestService.getAll().then(function(results) {
        vm.result = results;
        logger.info('Request search complete', results);
        return vm;
      });
    }

    function showAddRequestModal() {
      vm.request = {}; 
      vm.addRequestDialogShown = true;
    }

    function addRequestSave() {
      requestService.add(vm.request).then(function (result) {
        vm.addRequestDialogShown = false;
        logger.info('Request Successfully Saved.');
        search();
      });
    }
  }

}(angular.module('incidentSystemApp')));
