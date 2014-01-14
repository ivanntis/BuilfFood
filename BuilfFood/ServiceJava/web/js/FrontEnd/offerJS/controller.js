/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var offerControllers = angular.module('offerControllers', ['ngResource']);
 
offerControllers.controller('offerListCtrl',['$scope','offerServices',  function ($scope,offerServices) {
    
    $scope.offers = offerServices.query();
    console.log($scope.offers);
    

}]);


//angular.module('offerControllers', []).
//  controller('offerListCtrl', ['$scope', 'Offer', function($scope, Offer) {
//    // Instantiate an object to store your scope data in (Best Practices)
//    $scope.data = {};
//    
//    Offer.query(function(response) {
//      // Assign the response INSIDE the callback
//      $scope.data.offers = response;
//    });
//  }]);


//var offerControllers = angular.module('offerControllers', ['ngResource']);
// 
//offerControllers.controller('offerListCtrl', ['$scope', function ($scope) {
//$scope.offers = [
//    {'id': 'Nexus S',
//     'desc': 'Fast just got faster with Nexus S.'},
//    {'id': 'Motorola XOOM™ with Wi-Fi',
//     'desc': 'The Next, Next Generation tablet.'},
//    {'id': 'MOTOROLA XOOM™',
//     'desc': 'The Next, Next Generation tablet.'}
//  ];
//  console.log("controller");
//}]);