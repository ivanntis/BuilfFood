/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var offerControllers = angular.module('offerControllers', ['ngResource','offerServices']);
 
offerControllers.controller('offerListCtrl',['$scope','Offer',  function ($scope,Offer) {
    console.log("Offer.controller");
    $scope.offers = Offer.query();
     console.log(Offer.query());

}]);

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