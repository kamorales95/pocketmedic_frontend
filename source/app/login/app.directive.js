(function(){
  'use strict';
  angular.module('app.login.directive', [

  ]).directive('login', login);

  function login(){
    return{
      scope:{},
      restrict: 'EA',
      templateUrl:'app/login/login.html'
    };
  }
})();
