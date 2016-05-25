(function () {
    'use strict';

    angular.module('app.nuevacontraseña.directivas', [

    ]).directive('nuevacontraseña', nuevacontraseña);

    function nuevacontraseña() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/recuperarcontraseña/nuevacontraseña/nuevacontraseña.html'
        }
    }
})();
