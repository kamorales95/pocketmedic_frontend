(function () {
    'use strict';

    angular.module('app.consultasList.route', [

    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('consultasList', {
                url: '/consultasList',
                template: '<consultas-list/>'
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
