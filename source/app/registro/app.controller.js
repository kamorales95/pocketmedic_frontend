(function(){
  'use strict';

  angular.module('app.registro.controller', [

  ]).controller('usuariosCreateCtrl', usuariosCreateCtrl);

  usuariosCreateCtrl.$inject = ['$location', '$mdToast', 'Usuarios', 'Ciudades', 'Roles', 'TitulosYCertificados'];
    function usuariosCreateCtrl($location, $mdToast, Usuarios, Ciudades, Roles, TitulosYCertificados) {

      var vm=this;
      vm.aceptado=true;
        /*this.ciudades = Ciudades.query();*/
        vm.SelectRol;
        vm.queryCiudades = queryCiudades;
        vm.roles=Roles.query();
        vm.titulos=queryTitulosYCertificados;

        // console.log(TitulosYCertificados.queryByTitulos({
        //   query: 'c'
        // }));
      //  console.log(this.queryRoles.length);
        this.dateMax = new Date();
        this.dateMax.setFullYear(this.dateMax.getFullYear() - 18);
        vm.create = function() {
          console.log('titulo');
          console.log(vm.tituloscertificados);
          if(vm.tituloscertificados!=null){
          vm.usuario.tituloCertificadoList=[{idProfesiones: vm.tituloscertificados.idProfesiones, titulos: vm.tituloscertificados.titulos}];
          }
          vm.usuario.idRol=vm.SelectRol;
            Usuarios.save(vm.usuario, function() {
              $location.path('/');
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Te has Registrado Exitosamente')
                        .position('bottom right'));
            }, function(error) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(error.status + ' ' + error.data)
                    .position('bottom right'));
            });
        }

        function queryCiudades(str){
          return Ciudades.queryByNombre({
            query: str
          });
        }

        getRoles.$inject = ['Roles'];
        function getRoles(Roles) {
        return Roles.query();
        }

        function queryTitulosYCertificados(str){
          return TitulosYCertificados.queryByTitulos({
            query: str
          });
        }

    }


})();
