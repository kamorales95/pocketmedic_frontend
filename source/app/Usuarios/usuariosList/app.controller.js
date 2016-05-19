(function(){
  'use strict';

  angular.module('app.usuariosList.controller', [
  ]).controller('usuariosListCtrl', usuariosListCtrl);

  usuariosListCtrl.$inject = ['$location', '$mdToast', 'Usuarios', 'Tituloscertificados'];
    function usuariosListCtrl($location, $mdToast, Usuarios, Tituloscertificados) {

        var vm = this;
        console.log('PRUEBA');
        vm.tituloscertificados=Tituloscertificados.query();
         vm.usuarios=Usuarios.findUsuarioByIdRol({idRol: 'MEDIC'});
    }
})();
