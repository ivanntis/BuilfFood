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

offerApp
.config(['$httpProvider',function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
 }]) 
 .config(['$routeProvider',
  function($routeProvider) {
            console.log("$routeProvider");
    $routeProvider.
      when('/offerFood', {
        templateUrl: '/offer/offerFood.html',
        controller: 'offerListCtrl'
      }).
      otherwise({
        redirectTo: '/offer/offerFood'
      });
  }]);
