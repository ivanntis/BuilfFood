/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var offerServices = angular.module('offerServices', ['ngResource']);

offerServices.factory('offerServices', function ($resource) {
    return $resource('http://localhost:3080/wsLunch/authentication/ivan/asd', {}, {
        query: { method: 'GET', isArray: true }
    });
});

  
