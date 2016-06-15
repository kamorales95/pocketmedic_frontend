(function(){
  'use strict';

  angular.module('app.citamedica.route',[

  ]).config(configure);

  configure.$inject=['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
          .state('citamedica', {
              url: '/citamedica/:idUsuario/:idMedico',
              template: '<citamedica/>'
          });
  };
})();
