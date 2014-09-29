angular.module('starter.controllers')

.controller('FriendsCtrl', function($rootScope, $scope, $state, socket, Database) {
  
  $scope.friends = $rootScope.user.friends;

});