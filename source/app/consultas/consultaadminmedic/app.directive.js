(function(){
  'use strcit';

  angular.module('app.consultaadminmedic.directive',[
  ]).directive('consultaadminmedic', consultaadminmedic);

  function consultaadminmedic() {
      return {
          scope: {},
          templateUrl: 'app/consultas/consultaadminmedic/consultaadmin.html',
          restrict: 'EA',
          controller: 'consultaadminmedicCtrl',
          controllerAs: 'vm'
      }
  }
})();
