(function () {
    'use strict';

    angular.module('app.calendario.directiva', [

    ]).directive('calendarioList', calendarioList);

    function calendarioList() {
        return {
            scope: {},
            templateUrl: 'app/calendario/calendario.html',
            restrict: 'EA'

        }
    }
})();
