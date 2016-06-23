(function () {
    'use strict';

    angular.module('app.consulta-create.directive', [

    ]).directive('consulta', consulta);

    function consulta() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/consultas/consulta-create/consulta.html',
            controller: 'consultaCtrl',
            controllerAs: 'vm'
        }
    }

})();
