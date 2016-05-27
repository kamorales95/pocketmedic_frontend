(function () {
    'use strict';

    angular.module('app.nuevacontraseña.router', [

    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('nuevacontraseña', {
                url: '/nuevacontraseña/:idUsuario/:Codigo',

                        template: '<nuevacontraseña/>'

            });
    };
})();
