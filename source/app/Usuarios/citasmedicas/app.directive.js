(function(){
  'use strict';

  angular.module('app.citasmedicas.directiva',[
  ]).directive('citacreate', citacreate);

  function citacreate(){
    return{
      scope:{},
      restrict: 'EA',
      templateUrl:'app/Usuarios/citasmedicas/create/create.html',
      controller: '',
      controllerAs: 'vm'
    };

  }
})();
