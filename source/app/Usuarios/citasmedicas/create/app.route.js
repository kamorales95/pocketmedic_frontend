(function () {
    'use strict';

    angular.module('app.citacreate.route', [
    ]).config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('citacreate', {
                url: '/citacreate/:idUsuario/:idMedico',
                template: '<citacreate/>'
            });
    };
})();
