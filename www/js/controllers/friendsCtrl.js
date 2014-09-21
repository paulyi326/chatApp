angular.module('starter.controllers')

.controller('FriendsCtrl', function($scope, $state, socket) {
  
  $scope.friends = [
    { title: 'Kobe', id: 1 },
    { title: 'Kyrie', id: 2 },
    { title: 'Tim', id: 3 },
    { title: 'Jeremy', id: 4 },
    { title: 'Manu', id: 5 },
    { title: 'Dwight', id: 6 },
    { title: 'paul', id: 7}
  ];

});