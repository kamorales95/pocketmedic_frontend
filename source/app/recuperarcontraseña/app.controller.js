(function () {

  'use strict'

  angular.module('app.email.controller',[

  ]).controller('restablecercontra', restablecercontra);

  restablecercontra.$inject = [ 'Email','$mdToast', '$location'];
  function  restablecercontra( Email , $mdToast, $location){
    var vm = this;

vm.enviar=function(){

      Email.save(vm.recoveryPassword, function() {
        $location.path('/');
          $mdToast.show(
              $mdToast.simple()
                  .textContent('')
                  .position('bottom right'));
      }, function(error) {
          $mdToast.show(
              $mdToast.simple()
              .textContent(error.status + ' ' + error.data)
              .position('bottom right'));
      });

    }
  }

  }

)();
