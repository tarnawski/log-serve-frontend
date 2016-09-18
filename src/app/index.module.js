(function() {
  'use strict';

  angular
    .module('logServeFrontend', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'toastr',
      'angular-storage',

      // App modules
      'logServeFrontend.login',
      'logServeFrontend.dashboard'

    ]);

})();
