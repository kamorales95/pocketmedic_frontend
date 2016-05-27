(function(){
  'use strict';

  angular.module('app.email.services',[

  ]).factory('Email', Email);



    Email.$inject=['$resource','BASEURL'];
    function Email($resource, BASEURL) {
        return $resource(BASEURL + 'email/recoverypass',
        { idConsultas: '@idemail' },
        { 'get':    {method:'GET'},
          'save':   {method:'POST'},
          'query':  {method:'GET', isArray:true},
          'delete': {method:'DELETE'},
          'update': {method: 'PUT'}
        })
    }

})();
