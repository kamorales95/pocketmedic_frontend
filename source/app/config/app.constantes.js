(function () {
    'use strict';

    angular.module('app.config', [

    ]).constant('BASEURL', 'http://localhost:8080/pocketmedic_backend/webresources/')

    //En este módulo se pueden declarar y asignar todas las constantes
    //que se usarán en la aplicación.



    .config(configure);
    configure.$inject = ['$authProvider', 'BASEURL'];
    function configure($authProvider, BASEURL){
      //Parametros De configuracion satellizer
      $authProvider.loginUrl = BASEURL + 'auth/login';
      $authProvider.tokenName = 'token';
      $authProvider.tokenPrefix = 'Portafolio';
    }
})();
