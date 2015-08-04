/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('cart')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('_', '_')
    .constant('moment', moment);

})();
