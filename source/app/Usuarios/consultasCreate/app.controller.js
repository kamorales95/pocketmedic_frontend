(function(){
  'use strict';

  angular.module('app.consultasCreate.controller', [
  ]).controller('consultasCreateCtrl', consultasCreateCtrl);

  consultasCreateCtrl.$inject = ['$location', '$mdToast', 'Consultas'];
    function consultasCreateCtrl($location, $mdToast, Consultas) {

        var vm = this;

        vm.create = function() {
            consultas.save(vm.consultas, function() {
              $location.path('#/perfil/{{vm.getIdCurrentUser()}}');
                // $mdToast.show(
                //     $mdToast.simple()
                //         .textContent('')
                //         .position('bottom right'));
            }, function(error) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(error.status + ' ' + error.data)
                    .position('bottom right'));
            });
        }
    }
})();
