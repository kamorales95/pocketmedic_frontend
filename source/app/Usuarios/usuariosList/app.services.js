(function(){
  'use strict';

  angular.module('app.usuariosList.services',[

  ]);

    Usuarios.$inject=['$resource','BASEURL'];
    function Usuarios($resource, BASEURL) {
        return $resource(BASEURL + 'usuarios/:idUsuario',
        { idUsuario: '@idUsuario' },
        {
          //'update': {method: 'PUT'},


        }

    )}

})();
