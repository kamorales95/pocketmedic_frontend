(function () {
    'use strict';

    angular.module('app.recuperarcontraseña.directivas', [

    ]).directive('recuperarcontraseña', recuperarcontraseña);

    function recuperarcontraseña() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/recuperarcontraseña/recuperarcontraseña.html'
        }
    }
})();
