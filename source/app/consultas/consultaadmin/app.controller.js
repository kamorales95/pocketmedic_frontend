(function(){
  'use strict';

  angular.module('app.consultaadmin.controller',[
  ]).controller('consultaadminCtrl', consultaadminCtrl);

  consultaadminCtrl.$inject=['$location', '$mdToast', 'Consultas', 'Usuarios', '$stateParams'];
  function consultaadminCtrl($location, $mdToast, Consultas, Usuarios, $stateParams){

    var vm = this;

    vm.consultas = Consultas.query();

    //vm.consultas = Consultas.query();
      console.log('Hola Que Hace');
       //vm.consultas=Consultas.findByUsuario({idUsuario: $stateParams.idUsuario});
       console.log('Hola Que Hace');

  }
})();
