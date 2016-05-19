(function(){
  'use strict';

  angular.module('app.perfil.directive',[

  ]).directive('perfil', perfil);

  function perfil(){
    return {
      scope:{},
      restrict: 'EA',
      templateUrl: 'app/perfil/perfil.html',
      controller: 'perfilCtrl',
      controllerAs: 'vm'
    };
  }

})();
