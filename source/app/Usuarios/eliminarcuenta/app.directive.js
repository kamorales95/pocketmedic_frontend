(function () {
    'use strict';

    angular.module('app.aliminar.directiva', [

    ]).directive('eliminar', eliminar);

    function eliminar() {
        return {
            scope: {},
            templateUrl: 'app/Usuarios/eliminarcuenta/eliminar.html',
            restrict: 'EA'
        }
    }
})();
