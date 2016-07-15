(function(){
  'use strict';

  angular.module('app.consultaadmin.controller',[
  ]).controller('consultaadminCtrl', consultaadminCtrl);

  consultaadminCtrl.$inject=['$location', '$mdToast', 'Consultas', 'Usuarios', '$stateParams','Respuestas','$auth'];
  function consultaadminCtrl($location, $mdToast, Consultas, Usuarios, $stateParams,Respuestas,$auth){

    var vm = this;

    vm.consultas = Consultas.query();
    console.log(vm.respuestas);
    vm.respuestas=Respuestas.findbyIdUsuario({idUsuarios:$auth.getPayload().sub});


    vm.currentrespuesta=null;
    vm.updatecurrentrespuesta=function(str){
      vm.currentrespuesta= Respuestas.get({idRespuestas:str});
    }

  }
})();
