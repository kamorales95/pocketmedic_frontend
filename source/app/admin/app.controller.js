(function () {
    'use strict';

    angular.module('app.admin.controller', [

    ]).controller('adminCtrl', adminCtrl);

    function adminCtrl(){
        this.usuarios = [
            {nombre: 'Diego ', apellido: 'Marquez ', email: 'D@M'},
            {nombre: 'Juan David', apellido: 'Benalcazar', email: 'J@B'},
            {nombre: 'Breiman', apellido: 'Cepeda', email: 'B@C'},
            {nombre: 'Juan Diego', apellido: 'Guzman', email: 'D@G'},
            {nombre: 'Julian', apellido: 'Aranzazu ', email: 'J@A'},
            {nombre: 'Kevin', apellido: 'Morales', email: 'J@B'},
            {nombre: 'Camilo', apellido: 'Doria', email: 'B@C'},

        ]
    }


})();
