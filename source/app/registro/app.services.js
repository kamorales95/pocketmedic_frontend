(function(){
  'use strcit';

  angular.module('app.registro.services',[

  ]).factory('Usuarios', Usuarios)
    .factory('Roles', Roles)
    .factory('Ciudades', Ciudades)
    .factory('TitulosYCertificados', TitulosYCertificados);

    Usuarios.$inject=['$resource','BASEURL'];
    function Usuarios($resource, BASEURL) {
        return $resource(BASEURL + 'usuarios/:idUsuario',
        { idUsuario: '@idUsuario' },
        { 'get':    {method:'GET'},
          'save':   {method:'POST'},
          'query':  {method:'GET', isArray:true},
          'delete': {method:'DELETE'},
          'update': {method: 'PUT'},

          findUsuarioByIdRol: {
            url: BASEURL + 'usuarios/rol/:idRol',
            method: 'GET',
            isArray: true,
            params: {
              idRol: '@idRol'
            }
          },
          findUsuarioByTitulos: {
            url: BASEURL + 'usuarios/titulos/:idRol/:titulos',
            method: 'GET',
            isArray: true,
            params: {
              titulos: '@titulos',
              idRol: '@idRol'
            }
          }
        })
    }

    Roles.$inject = ['$resource', 'BASEURL'];
    function Roles($resource, BASEURL) {
        return $resource(BASEURL + 'roles/:idRol',
        { idRol: '@idRol' },
        { 'get':    {method:'GET'},
          'save':   {method:'POST'},
          'query':  {method:'GET', isArray:true},
          'delete': {method:'DELETE'},
          'update': {method: 'PUT'}
        })
    }

    function Ciudades($resource, BASEURL) {
        return $resource(BASEURL + 'ciudades/:idCiudad', {
            idCiudad: '@idCiudad'
        },{
          queryByNombre: {
            url: BASEURL + 'ciudades/nombre/:query',
            method: 'GET',
            isArray: true,
            params: {
              query: '@query'
            }
          }
        });
    }

    TitulosYCertificados.$inject=['$resource','BASEURL'];
    function TitulosYCertificados($resource, BASEURL) {
      return $resource(BASEURL + 'titulosycertificados/:idProfesiones', {
          idProfesiones: '@idProfesiones'
      },{
        queryByTitulos: {
          url: BASEURL + 'titulosycertificados/nombre/:query',
          method: 'GET',
          isArray: true,
          params: {
            query: '@query'
          }
        }
      });
    }

})();
