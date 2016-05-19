(function(){
    'use strict';

    angular.module('app.usuarios.directive', [

    ]).directive('registrousuario', registrousuario);

    function registrousuario(){
      return{
        scope:{},
        templateUrl:'app/usuarios/registro.html'
      };
    }


})();
