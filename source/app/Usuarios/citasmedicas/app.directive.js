(function () {
    'use strict';

    angular.module('app.citamedica.directive', [

    ]).directive('citamedica', citamedica);

    function citamedica() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/Usuarios/citasmedicas/citasmedicas.html',
            //controller: 'consultaCtrl',
            controllerAs: 'vm'
        }
    }

})();
