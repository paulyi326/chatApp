angular.module('starter.controllers')

.controller('FriendCtrl', function($scope, $stateParams, socket) {
    $scope.messages = [
        'hi',
        'bye',
        'you suck',
        'youre awesome'
    ];

    $scope.text = '';
    $scope.sendMessage = function(msg) {
        console.log(msg);
        var message = {
            to: '7',
            from: '7',
            text: msg
        }
        socket.emit('chat message', message);
    };

    socket.on('chat message', function(msg) {
        $scope.messages.push(msg.text);
    });
});