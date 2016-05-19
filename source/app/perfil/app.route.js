(function(){
  'use strict';

  angular.module('app.perfil.route',[

  ]).config(configure);

  configure.$inject=['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
          .state('perfil', {
              url: '/perfil/:idUsuario',
              template: '<perfil/>'
          });
  };
})();
