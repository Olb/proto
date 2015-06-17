// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myModule = angular.module('protoApp', ['ionic', 'ngCordova']).controller('MyCtrl', function($scope, $cordovaAppVersion, $cordovaToast) {
        
    $scope.myVal = "meee";
    
    document.addEventListener("deviceready", function () {

    $cordovaAppVersion.getAppVersion().then(function (version) {
        $scope.myAppVersion = version;
      });
    
        
        $scope.showToast = function() {
           $cordovaToast
            .show('Here is a message', 'long', 'center')
            .then(function(success) {
              // success
            }, function (error) {
              // error
            });
        };
        
        
  }, false);
});




