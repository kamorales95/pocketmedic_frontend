(function(){
  'use strcit';

  angular.module('app.consultaadmin.directive',[
  ]).directive('consultaadmin', consultaadmin);

  function consultaadmin() {
      return {
          scope: {},
          templateUrl: 'app/Usuarios/consultaadmin/consultaadmin.html',
          restrict: 'EA',
          controller: 'consultaadminCtrl',
          controllerAs: 'vm'
      }
  }
})();
