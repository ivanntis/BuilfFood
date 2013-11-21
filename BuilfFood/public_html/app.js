/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 *ipena - gizmo dale ON a tus ideas!!
 */
        
var offerApp = angular.module('offerApp', [
  'ngRoute',
  'offerControllers',
  'offerServices'
]);


offerApp.config(['$routeProvider',
  function($routeProvider) {
      
    $routeProvider.
      when('/exmapleAngulaJS', {
        templateUrl: '/examples/exmapleAngulaJS.html',
        controller: 'offerListCtrl'
      }).
      otherwise({
        redirectTo: '/examples/exmapleAngulaJS'
      });
  }]);

