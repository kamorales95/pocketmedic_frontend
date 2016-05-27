(function () {
    'use strict';

    angular.module('app.bienvenido.directivas', [

    ]).directive('bienvenido', bienvenido)

    function bienvenido() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/bienvenido/bienvenido.html'
        }
    }

})();
