(function () {
    'use strict';

    angular.module('app.consultasList.directivas', [

    ]).directive('consultasList', consultasList);

    function consultasList() {
        return {
            scope: {},
            templateUrl: 'app/consultas/consultasList/consultasList.html',
            restrict: 'EA',
            controller: 'consultasListCtrl',
            controllerAs: 'vm'
        }
    }
})();
