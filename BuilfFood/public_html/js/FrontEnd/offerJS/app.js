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
            console.log("$routeProvider");
    $routeProvider.
      when('/offer', {
        templateUrl: 'offer/offerFood.html',
        controller: 'offerListCtrl'
      }).
      otherwise({
        redirectTo: 'offer/offerFood'
      });
  }]);
