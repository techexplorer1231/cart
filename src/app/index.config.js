(function() {
  'use strict';

  angular
    .module('cart')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $mdThemingProvider, $mdIconProvider) {

    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 5000;
    toastr.options.positionClass = 'toast-bottom-left';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    //set primary theme for the application
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue');

    //declare SVG icons to be used in application
    $mdIconProvider
      .icon('vertical-menu', '../assets/images/ic_more_vert_white_24px.svg', 24)
      .icon('not-favorite', '../assets/images/ic_turned_in_not_white_24px.svg', 24)
      .icon('favorite', '../assets/images/ic_turned_in_white_24px.svg', 24)
      .icon('menu', '../assets/images/ic_menu_white_24px.svg', 24)
      .icon('cart-empty', '../assets/images/ic_add_shopping_cart_white_24px.svg', 24)
      .icon('cart-fill', '../assets/images/ic_shopping_cart_white_24px.svg', 24);
  }

})();
