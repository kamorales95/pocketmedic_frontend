(function () {
    'use strict';

    angular.module('app.calendario.route', [

    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('calendario', {
                url: '/calendario',
                template: '<calendario-list/>'
                /*views: {
                    'registro': {
                        template: '<registro/>'
                    },
                    'piepagina': {
                        template: '<piepagina/>'
                    },
                    'encabezado': {
                        template: '<encabezado/>'
                    }
                }*/
            });
    };
})();
