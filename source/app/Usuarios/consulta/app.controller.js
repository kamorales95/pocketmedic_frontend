(function () {
    'use strict';

    angular.module('app.consulta.controller', [
    ])
    .controller('consultaCtrl', consultaCtrl);

    function consultaCtrl($location, $mdToast, Consultas, $stateParams) {
      var vm = this;
      this.dateMax = new Date();
      // this.dateMax.setFullYear(this.dateMax.getFullYear() - 18);

      vm.consultas={usuario:{idUsuario: $stateParams.idUsuario}, medico:{idUsuario: $stateParams.idMedico}}
      console.log('dfdf');
      console.log(vm.consultas);
      vm.create = function() {
          Consultas.save(vm.consultas, function() {
            $location.path('/consultasList');
              $mdToast.show(
                  $mdToast.simple()
                      .textContent('Consulta Enviada')
                      .position('bottom right'));
          }, function(error) {
              $mdToast.show(
                  $mdToast.simple()
                  .textContent(error.status + ' ' + error.data)
                  .position('bottom right'));
          });
      }
    }
})();
