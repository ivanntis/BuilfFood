/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//var offerServices = angular.module('offerServices', ['ngResource']);
// 
// 
//offerServices.factory('Offer', ['$resource',function($resource){
//      //  console.log("Servicio1");
//         return $resource('http://localhost:3081/wsLunch/authentication/ivan/:offerId', {}, {
//                    query: {method:'GET', params:{offerId:'offers'}, isArray:true}
//                   
//                });
//             //   console.log("Servicio");
//  }]);
//  
  
var offerServices = angular.module('offerServices', ['ngResource']);

offerServices.factory('offerServices', function ($resource) {
    return $resource('http://localhost:3081/wsLunch/authentication/ivan/offerId', {}, {
        query: { method: 'GET', isArray: false }
    });
});




//var services = angular.module('ngdemo.services', ['ngResource']);
//
//services.factory('UsersFactory', function ($resource) {
//    return $resource('/ngdemo/web/users', {}, {
//        query: { method: 'GET', isArray: true },
//        create: { method: 'POST' }
//    });
//});
