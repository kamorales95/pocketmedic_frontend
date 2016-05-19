(function(){
  'use strict';

  angular.module('app.configuracion.route',[

  ]).config(configure);

  configure.$inject=['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
          .state('configuser', {
              url: '/configuser/:idUsuario',
              template: '<configuser/>'
          });
  };
})();
