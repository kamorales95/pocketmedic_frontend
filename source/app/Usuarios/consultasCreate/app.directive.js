(function () {
    'use strict';

    angular.module('app.consultasCreate.directivas', [

    ]).directive('consultasCrate', consultasCreate);

    function consultasCreate() {
        return {
            scope: {},
            templateUrl: 'app/Usuarios/consultasList/consultasList.html',
            restrict: 'EA',
            controller: 'consultasListCtrl',
            controllerAs: 'vm'
        }
    }
})();
