
(function(){
  'use strict';

  angular.module('app.calendario-list.js')
    .directive('calendarioList', calendarioList);

    function calendarioList (){
      return {
        scope:{},
        templateUrl: 'app/calendario/calendario-list/calendario-list.html',
        restrict: 'EA',
        controller: 'calendarioCtrl',
        controllerAs: 'vm',

      };

    }

})();
