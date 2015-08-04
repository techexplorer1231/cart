(function() {
  'use strict';

  angular
    .module('cart')
    .directive('cpcSidebar', cpcSidebar);

  /** @ngInject */
  function cpcSidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/cpcSidebar/cpcSidebar.html',
      controller: SidebarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SidebarController($mdUtil, $mdSidenav, logger) {
      var vm = this;
      vm.toggleLeft = buildToggler('left');

      /**
       * Build handler to open/close a SideNav; when animation finishes
       * report completion in console
       */
      function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
          $mdSidenav(navID)
            .toggle()
            .then(function () {
              logger.info('toggle ' + navID + ' is done');
            });
        }, 300);
        return debounceFn;
      }

      vm.close = function() {
        logger.debug('activate sidebar');
        $mdSidenav('left').close()
          .then(function () {
            logger.info('close LEFT is done');
          });
      };

    }
  }

})();
