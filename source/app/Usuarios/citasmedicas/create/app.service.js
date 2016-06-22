(function(){
  'use strict';

  angular.module('app.citacreate.service',[

  ]).factory('CitaMedica', CitaMedica);

  CitaMedica.$inject=['$resource','BASEURL'];
  function CitaMedica($resource, BASEURL) {
      return $resource(BASEURL + 'citasmedicas/:idCita',
      { idCita: '@idCita' },
      { 'get':    {method:'GET'},
        'save':   {method:'POST'},
        'query':  {method:'GET', isArray:true},
        'delete': {method:'DELETE'},
        'update': {method: 'PUT'}
      })
  }

})();
