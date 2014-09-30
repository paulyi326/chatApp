angular.module('starter.controllers')

.controller('LoginCtrl', function($rootScope, $scope, $state, Database, socket) {
  $scope.login = {};
  $scope.login.username;
  $scope.login.password;


  // called when user clicks login
  // just login with id as 1, 4, or 7. That's what's in the db right now
  // You can leave password blank
  $scope.login = function(id) {

    Database.login(id).success(function(data) {
      $rootScope.user = {
        id: +id, // converts string to number
        friends: data.friends,
        name: data.name
      };

      socket.emit('join', $rootScope.user.id);
      console.log('data', data);

      $state.go('app.friends');

    }).error(function(data) {
      console.log('error in logging in', data);
    });
  };

});