(function() {
  'use strict';

  angular
    .module('cart')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
