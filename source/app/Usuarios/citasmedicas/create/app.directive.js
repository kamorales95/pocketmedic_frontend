(function(){
  'use strict';

  angular.module('app.citasmedicas.directive',[
  ]).directive('citacreate', citacreate);

  function citacreate(){
    return{
      scope:{},
      restrict: 'EA',
      templateUrl:'app/Usuarios/citasmedicas/create/citacreate.html',
      controller: 'citacreateCtrl',
      controllerAs: 'vm'
    };

  }
})();
