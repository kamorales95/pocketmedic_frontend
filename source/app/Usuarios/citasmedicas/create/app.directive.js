(function(){
  'use strict';

  angular.module('app.citasmedicas.directiva',[
  ]).directive('citacalendario', citacalendario);

  function citacalendario(){
    return{
      scope:{},
      restrict: 'EA',
      templateUrl:'app/Usuarios/citasmedicas/create/citacreate.html',
      controller: '',
      controllerAs: 'vm'
    };

  }
})();
