(function(){
  'use strict';

  angular.module('app.citacreateCtrl',[
  ]).controller('citacreateCtrl', citacreateCtrl);


  function citacreateCtrl ($location, $mdToast, CitaMedica, $stateParams){
    var vm = this;
    this.dateMax = new Date();
    vm.citasmedicas={usuario:{idUsuario: $stateParams.idUsuario}, medico:{idUsuario: $stateParams.idMedico}}
    vm.create = function(){
      CitaMedica.save(vm.citasmedicas, function() {
        $location.path('/');
          $mdToast.show(
              $mdToast.simple()
                  .textContent('Cita Creada')
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
