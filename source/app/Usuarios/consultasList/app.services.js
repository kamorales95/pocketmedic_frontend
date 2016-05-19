(function(){
  'use strict';

  angular.module('app.consultasList.services',[

  ])
  .factory('Consultas', Consultas);

    Consultas.$inject=['$resource','BASEURL'];
    function Consultas($resource, BASEURL) {
        return $resource(BASEURL + 'consultas/:idConsultas',
        { idConsultas: '@idConsultas' },
        {
          'update': {method: 'PUT'},
          findUsuarioByIdRol: {
            url: BASEURL + 'consultas/rol/:idRol',
            method: 'GET',
            isArray: true,
            params: {
              idRol: '@idRol'
            }
          }
        }

    )}


})();
