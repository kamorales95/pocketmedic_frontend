(function(){
  'use strict';

  angular.module('app.respuestas.services',[

  ]).factory('Respuestas', Respuestas);

    Respuestas.$inject=['$resource','BASEURL'];
    function Respuestas($resource, BASEURL) {
        return $resource(BASEURL + 'respuestas/:idRespuestas',
        { idRespuestas: '@idRespuestas' },
        {
          'update': {method: 'PUT'},
          findbyIdUsuario:{
            url:BASEURL + 'respuestas/usuario/:idUsuarios',
            method: 'GET',
            isArray:true,
            params:{
              idUsuarios:'@idUsuarios'
            }
          }
        });
      }


})();
