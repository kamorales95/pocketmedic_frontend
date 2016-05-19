(function () {
    'use strict';

    angular.module('app.consulta.controller', [
    ])
    .controller('consultaCtrl', consultaCtrl);

    function consultaCtrl($location, $mdToast, Consultas) {
      var vm = this;
      this.dateMax = new Date();
      this.dateMax.setFullYear(this.dateMax.getFullYear() - 18);
      vm.create = function() {
          Consultas.save(vm.consultas, function() {
            $location.path('/');
              $mdToast.show(
                  $mdToast.simple()
                      .textContent('Consulta Creada')
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
