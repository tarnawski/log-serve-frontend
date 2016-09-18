(function() {
  'use strict';

  angular
    .module('logServeFrontend')
    .config(routerConfig);

    /** @ngInject */
    function routerConfig($urlRouterProvider) {
        // Default behaviour
        $urlRouterProvider.otherwise('/');
    }

})();

