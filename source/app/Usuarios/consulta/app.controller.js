(function (){
    'use strict';

    angular.module('app.consulta.controller', [
    ]).controller('consultaCtrl', consultaCtrl);

    consultaCtrl.$inject=['$location', '$mdToast', 'Consultas', '$stateParams', 'TitulosYCertificados']
    function consultaCtrl($location, $mdToast, Consultas, $stateParams, TitulosYCertificados) {
      var vm = this;
      this.dateMax = new Date();
      vm.titulos=queryTitulosYCertificados;
      // this.dateMax.setFullYear(this.dateMax.getFullYear() - 18);
     vm.consultas={idUsuario:{idUsuario: $stateParams.idUsuario}}
      console.log('dfdf');
      console.log(vm.consultas);
      if(vm.tituloscertificados!=null){
      vm.usuario.tituloCertificadoList=[{idProfesiones: vm.tituloscertificados.idProfesiones, titulos: vm.tituloscertificados.titulos}];}
      console.log('titulo');
      //vm.consultas={usuario:{idUsuario: $stateParams.idUsuario}, medico:{idUsuario: $stateParams.idMedico}}
      //console.log('dfdf');
      //console.log(vm.consultas);
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
      function queryTitulosYCertificados(str){
        return TitulosYCertificados.queryByTitulos({
          query: str
        });
      }
    }
})();
