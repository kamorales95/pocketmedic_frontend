(function(){
  'use strict';

  angular.module('app.header.directive', [

  ]).directive('encabezado', encabezado);

  function encabezado(){
    return {
      scope:{},
      restrict: 'EA',
      templateUrl: 'app/header/header.html',
      controller:'LoginController',
      controllerAs:'vm'
  };
}

})();
