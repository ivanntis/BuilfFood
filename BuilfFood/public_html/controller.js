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

