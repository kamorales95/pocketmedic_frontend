(function () {
  'use strict';

  angular.module('app.perfil.controller',[
  ]).controller('perfilCtrl', perfilCtrl);

  perfilCtrl.$inject = ['$stateParams','$location', '$mdToast','Usuarios'];
    function perfilCtrl($stateParams, $location, $mdToast, Usuarios){
      var vm = this;
      vm.SelectRol;

           vm.usuario = Usuarios.get({ idUsuario: $stateParams.idUsuario });
          //  console.log(vm.usuario);


           vm.update = function() {
                Usuarios.update(vm.usuario, function() {
                  console.log(vm.usuario);
                    $location.path('/');
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('Se ha  actualizado el  Usuario...')
                        .position('top right'));
                });
            }



    }

})();
