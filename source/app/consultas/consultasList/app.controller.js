(function(){
  'use strict';

  angular.module('app.consultasList.controller', [
  ]).controller('consultasListCtrl', consultasListCtrl);

//   consultasListCtrl.$inject = ['$location', '$mdToast', 'Consultas'];
//     function consultasListCtrl($location, $mdToast, Consultas) {
//
//         var vm = this;
//          vm.consultas = Consultas.findUsuarioByIdRol({idRol: 'MEDIC'});
//     }
// })();


 consultasListCtrl.$inject = ['$location', '$mdToast', 'Consultas', 'Usuarios'];

  function consultasListCtrl($location, $mdToast, Consultas, Usuarios) {
       var vm = this;
      //  vm.query = {
      //      limit: 5,
      //      page: 1
      //  };
      
       vm.consultas = Consultas.query();

   }

    })();
