(function() {
  'use strict';

  angular
    .module('cart')
    .directive('cpcHeader', cpcHeader);

  /** @ngInject */
  function cpcHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/cpcHeader/cpcHeader.html',
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HeaderController($mdSidenav, $mdUtil, logger) {
      var vm = this;
      vm.notificationsEnabled = true;
      vm.toggleLeft = buildToggler('left');

      /**
       * Build handler to open/close a SideNav; when animation finishes
       * report completion in console
       */
      function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function() {
          $mdSidenav(navID)
            .toggle()
            .then(function () {
              logger.info('toggle ' + navID + ' is done');
            });
        }, 300);

        return debounceFn;
      }

      vm.redial = function(e) {
        alert('Hello');
      };

    }
  }

})();
