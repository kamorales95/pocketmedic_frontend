(function(){
  'use strict';

  angular.module('app.citacontroller',[
  ]).controller('CitaCreateCtrl', CitaCreateCtrl);

  function CitaCreateCtrl ($location, $mdToast, CitaMedica, $stateParams){
    var vm = this;
    this.dateMax = new Date();
    vm.citamedica={usuario:{idUsuario: $stateParams.idUsuario}, medico:{idUsuario: $stateParams.idMedico}}
    vm.create = function() {
        CitaMedica.save(vm.citamedica, function() {
          $location.path('/');
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Cita Medica Guardada')
                    .position('top right'));
        }, function(error) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(error.status + ' ' + error.data)
                .position('top right'));
        });
    }
  }
})();
