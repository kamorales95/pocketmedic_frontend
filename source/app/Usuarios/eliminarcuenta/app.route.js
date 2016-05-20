(function(){
  'use strict';

  angular.module('app.eliminar.route',[

  ]).config(configure);

  configure.$inject=['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
          .state('eliminar', {
              url: '/eliminar/:idUsuario',
              template: '<eliminar/>'
          });
  };
})();
