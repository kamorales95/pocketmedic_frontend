(function(){
  'use strict';

  angular.module('app.consultaadminmedic.route',[
  ]).config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  //Se configura las rutas de la aplicación para modelo
  function configure($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
          .state('consultaadminmedic', {
              url: '/consultaadminmedic',
              template: '<consultaadminmedic/>'
      });
  };
})();
