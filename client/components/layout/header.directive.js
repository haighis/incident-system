(function(app) {

  'use strict';

  app.directive('wsHeader', wsHeader);
  app.directive('changeLayout', changeLayout);
  app.directive('toggleSidebar', toggleSidebar);
  app.directive('actionDropdown', actionDropdown);

  function actionDropdown() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          element.click(function(){
              element.parent().toggleClass('open');
              element.attr("aria-expanded", "true");
          })
      }
    }
  }

  function wsHeader() {
    return {
      templateUrl: 'components/layout/header.html',
      restrict: 'EA',
      link: function(scope, element, attrs) {}
    };
  }

  function toggleSidebar() {
		return {
    restrict: 'A',
		scope: {
		    modelLeft: '=',
		    modelRight: '='
		},

		link: function(scope, element, attr) {

		scope.modelLeft = false;

		element.on('click', function(){
		    if (element.data('target') === 'mainmenu') {
		        if (scope.modelLeft === false) {
		            scope.$apply(function(){
		                scope.modelLeft = true;
		            })
		        }
		        else {
		            scope.$apply(function(){
		                scope.modelLeft = false;
		            })
		        }
		    }
		    
		    if (element.data('target') === 'chat') {
		        if (scope.modelRight === false) {
		            scope.$apply(function(){
		                scope.modelRight = true;
		            })
		        }
		        else {
		            scope.$apply(function(){
		                scope.modelRight = false;
		            })
		        }
		        
		    }
		})
		}
		}
  }

  function changeLayout() {
  	return {
        restrict: 'A',
        scope: {
            changeLayout: '='
        },
        
        link: function(scope, element, attr) {
            
            //Default State
            if(scope.changeLayout === '1') {
                element.prop('checked', true);
            }
            
            //Change State
            element.on('change', function(){
                if(element.is(':checked')) {
                    localStorage.setItem('ma-layout-status', 1);
                    scope.$apply(function(){
                        scope.changeLayout = '1';
                    })
                }
                else {
                    localStorage.setItem('ma-layout-status', 0);
                    scope.$apply(function(){
                        scope.changeLayout = '0';
                    })
                }
            })
        }
    }
  }

}(angular.module('incidentSystemApp')));
