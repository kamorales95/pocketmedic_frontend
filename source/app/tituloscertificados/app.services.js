(function(){
  'use strict';

  angular.module('app.tituloscertificados.services',[

  ]).factory('Tituloscertificados', Tituloscertificados);

    Tituloscertificados.$inject=['$resource','BASEURL'];
    function Tituloscertificados($resource, BASEURL) {
        return $resource(BASEURL + 'titulosycertificados/:idProfesiones',
        { idProfesiones: '@idProfesiones' },
        {
          //'update': {method: 'PUT'},


        }

    )}

})();
