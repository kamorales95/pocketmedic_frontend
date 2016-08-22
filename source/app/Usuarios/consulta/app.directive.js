(function () {
    'use strict';

    angular.module('app.consulta.directive', [

    ]).directive('consulta', consulta);

    function consulta() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/Usuarios/consulta/consulta.html',
            controller: 'consultaCtrl',
            controllerAs: 'vm'
        }
    }

})();
