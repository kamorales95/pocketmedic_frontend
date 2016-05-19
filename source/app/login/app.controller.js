(function(){
  'use strict';
  angular
  .module('app.login.controller',[])
  .controller('LoginController',LoginController);
  LoginController.$inject = ['$auth', '$location', '$mdToast'];
  function LoginController($auth, $location, $mdToast) {
    var vm = this;

    vm.signIn = signIn;
    vm.getCurrentUser = getCurrentUser;
    vm.isAuthenticated = isAuthenticated;
    vm.logout = logout;
    vm.isAdmin = isAdmin;
    vm.isUser = isUser;
    vm.getIdCurrentUser = getIdCurrentUser;


    function signIn(){
    $auth.login(vm.user)
        .then(function(){
          vm.user = {};
          $location.url('/perfil');
          $mdToast.show(
            $mdToast.simple()
            .textContent('Sesion Iniciada...')
            .position('top right'));
        })
        .catch(function (error){
          $location.path('/');
          $mdToast.show(
            $mdToast.simple()
            .textContent(error.status + ' ' + error.data)
            .position('top right'));
        });
    }
    function getCurrentUser() {
      if (isAuthenticated()) {
        return $auth.getPayload().user;
      }else{
        return '';
      }
    }

    function getIdCurrentUser() {
      if (isAuthenticated()) {
        return $auth.getPayload().sub;
      }else{
        return '';
      }
    }


    function isAuthenticated() {
      return $auth.isAuthenticated();
    }
    function logout() {
  if (!$auth.isAuthenticated()) {
    return;
  }
  $auth.logout()
  .then(function(){
    $location.path('www.google.com');
    $mdToast.show(
      $mdToast.simple()
        .textContent('Sesion Finalizada...')
        .position('bottom right'));
  });
}

  function isAdmin() {
    if (isAuthenticated()){
      return $auth.getPayload().roles.indexOf('ADMIN') !== -1;
    }else{
      return false;
    }
  }

  function isUser() {
    if (isAuthenticated()){
      return $auth.getPayload().roles.indexOf('USER') !== -1;
    }else{
      return false;
    }

  }

   }
})();
