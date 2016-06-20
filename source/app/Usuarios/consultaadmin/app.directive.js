(function(){
  'use strcit';

  angular.module('app.consultadamin.directive',[
  ]).directive('consultadamin', consultadamin);

  function consultadamin() {
      return {
          scope: {},
          templateUrl: 'app/Usuarios/consultaadmin/consultaadmin.html',
          restrict: 'EA',
          controller: '',
          controllerAs: 'vm'
      }
  }
})();
