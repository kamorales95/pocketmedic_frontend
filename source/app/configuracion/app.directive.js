(function(){
  'use strict';

  angular.module('app.configuracion.directive',[

  ]).directive('configuser', configuser);

  function configuser(){
    return {
      scope:{},
      restrict: 'EA',
      templateUrl: 'app/configuracion/configuracion.html',
      controller: 'perfilCtrl',
      controllerAs: 'vm'
    };
  }

})();
