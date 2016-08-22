(function(){
  'use strict';

  angular.module('app.cita.services',[

  ]).factory('CitaMedica', CitaMedica);

    CitaMedica.$inject=['$resource','BASEURL'];
    function CitaMedica($resource, BASEURL) {
        return $resource(BASEURL + 'citamedica/:idCita',
        { idCita: '@idCita' },
        { 'get':    {method:'GET'},
          'save':   {method:'POST'},
          'query':  {method:'GET', isArray:true},
          'delete': {method:'DELETE'},
          'update': {method: 'PUT'}
        })
    }

})();
