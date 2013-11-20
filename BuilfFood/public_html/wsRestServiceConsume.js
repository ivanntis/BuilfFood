angular.module('myModule', ['ngResource'], function($provide) {
    $provide.factory('musics', ['$resource', function($resource) {
        return {
            getArtistBeginBy: function(beginByP) {
                return $resource('http://localhost:3080/wsLunch/authentication/ivan/ricardo').get(
                {
                    beginBy: beginByP
                } , //params
        
                function (data) {   //success
                        
                    if (! (data['music'] instanceof Array)){
                        if (typeof data['music'] != 'undefined'){ 
                            var myArray = new Array();
                            myArray.push(data['music']);
                            data['music'] =  myArray;           
                        }                                                       
                    }
                },
                function (data) {   //failure
                    //error handling goes here
                    }
                    );
            }
        }
    }]);
});

function SearchCtrl($scope, $resource, musics) {
    
    $scope.search = function() {                
                $scope.listMusic = musics.getArtistBeginBy($scope.yourSearch);                  
    }   
}  