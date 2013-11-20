/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var offerServices = angular.module('offerServices', ['ngResource']);
 
offerServices.factory('Offer', ['$resource',function($resource){
      //  console.log("Servicio1");
         return $resource('http://localhost:3080/wsLunch/authentication/ivan/Ricardo', {}, {
                    query: {method:'GET', params:{}, isArray:true}
                   
                });
             //   console.log("Servicio");
  }]);
  

  
