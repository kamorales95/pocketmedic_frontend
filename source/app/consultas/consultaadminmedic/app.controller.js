(function(){
  'use strict';

  angular.module('app.consultaadminmedic.controller',[
  ]).controller('consultaadminmedicCtrl', consultaadminmedicCtrl);

  consultaadminmedicCtrl.$inject=['$location', '$mdToast', 'Consultas', 'Usuarios', '$stateParams','Respuestas'];
  function consultaadminmedicCtrl($location, $mdToast, Consultas, Usuarios, $stateParams,Respuestas){

    var vm = this;

    vm.consultas = Consultas.query();

    vm.currentconsulta=null;
    vm.updatecurrentconsulta=function(str){
      vm.currentconsulta= Consultas.get({idConsultas:str});
    }

    vm.createRespuesta=function(){
      vm.respuestas.idConsultas=vm.currentconsulta;
      console.log(vm.respuestas);
      Respuestas.save(vm.respuestas, function() {
        $location.path('/consultaadminmedic');
          $mdToast.show(
              $mdToast.simple()
                  .textContent('Respuesta Enviada')
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
