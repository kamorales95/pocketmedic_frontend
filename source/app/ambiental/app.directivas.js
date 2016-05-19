(function () {
    'use strict';

    angular.module('app.ambiental.directivas', [

    ]).directive('ambiental', ambiental);

    function ambiental() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/ambiental/ambiental.html'
        }
    }
})();
