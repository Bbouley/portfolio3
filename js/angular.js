// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {

  $scope.studyDescription = false;

  $scope.studyDescriptionButton = function(){
    if($scope.studyDescription === false){
      $scope.studyDescription = true;
    } else {
      $scope.studyDescription = false;
    }
  };

  $scope.playlistDescription = false;

  $scope.playlistDescriptionButton = function(){
    if($scope.playlistDescription === false){
      $scope.playlistDescription = true;
    } else {
      $scope.playlistDescription = false;
    }
  };

});
