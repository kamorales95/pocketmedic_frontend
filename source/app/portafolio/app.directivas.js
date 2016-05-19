(function () {
    'use strict';

    angular.module('app.portafolio.directivas', [

    ]).directive('portafolio', portafolio);

    function portafolio() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/portafolio/portafolio.html'
        }
    }
})();
