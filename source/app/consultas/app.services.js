(function(){
  'use strict';

  angular.module('app.consultas.services',[

  ]).factory('Consultas', Consultas);

    Consultas.$inject=['$resource','BASEURL'];
    function Consultas($resource, BASEURL) {
        return $resource(BASEURL + 'consultas/:idConsultas',
        { idConsultas: '@idConsultas' },
        {
          'update': {method: 'PUT'},
          findByUsuario:{
            url: BASEURL + 'consultas/usuario/:idUsuario',
            method: 'GET',
            isArray: true,
            params: {
              idUsuario: '@idUsuario'
            }
          }
        });
      }


})();
