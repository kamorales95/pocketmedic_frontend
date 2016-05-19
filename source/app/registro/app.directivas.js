(function () {
    'use strict';

    angular.module('app.registro.directivas', [

    ]).directive('registro', registro);

    function registro() {
        return {
            scope: {},
            templateUrl: 'app/registro/registro.html',
            restrict: 'EA',
            controller: 'usuariosCreateCtrl',
            controllerAs: 'vm'
        }
    }
})();
