angular.module('starter.controllers')

.controller('LoginCtrl', function($rootScope, $scope, $state, Database, socket) {
  $scope.login = {};
  $scope.login.username;
  $scope.login.password;

  
  $scope.login = function(id) {

    Database.login(id).success(function(data) {
      $rootScope.user = {
        id: id,
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