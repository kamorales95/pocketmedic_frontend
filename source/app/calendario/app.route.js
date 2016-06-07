
(function(){
  'use strict';

  angular.module('app.calendario.route')
    .config(function ($stateProvider) {
      $stateProvider
        .state('calendario', {
          url: '/calendario',
          template: '<calendario-list></calendario-list>'
        })

    });

})();
