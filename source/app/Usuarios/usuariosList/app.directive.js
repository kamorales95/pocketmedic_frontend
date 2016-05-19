(function () {
    'use strict';

    angular.module('app.usuariosList.directivas', [

    ]).directive('usuariosList', usuariosList);

    function usuariosList() {
        return {
            scope: {},
            templateUrl: 'app/Usuarios/usuariosList/usuariosList.html',
            restrict: 'EA',
            controller: 'usuariosListCtrl',
            controllerAs: 'vm'
        }
    }
})();
