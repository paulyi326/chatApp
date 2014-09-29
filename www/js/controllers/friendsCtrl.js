angular.module('starter.controllers')

.controller('FriendsCtrl', function($rootScope, $scope, $state, socket, Database) {
  
  $scope.friends = [];

  Database.getFriends($rootScope.user.id).success(function(data) {

    console.log('friends successfully retrieved', data);

    $scope.friends = data;

  }).error(function(data) {
    console.log('error in retrieving friends', data);
  });

});