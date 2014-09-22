angular.module('starter.controllers')

.controller('FriendCtrl', function($scope, $stateParams, socket, Messages) {

    // This forwards the chat message event to angular so that
    // when switching back and forth between controllers, duplicate 
    // event listeners aren't created. Angular will clean up listeners
    // once a scope is destroyed
    socket.forward('chat message', $scope);

    Messages.getMessages($stateParams.id).success(function(data, status, headers, config) {
        console.log(data);
    });
    
    $scope.msg = { text: '' };

    $scope.sendMessage = function(msg) {
        console.log(msg);
        var message = {
            to: '7',
            from: '7',
            text: msg,
            fromUsername: 'Paul'
        }
        socket.emit('chat message', message);
        $scope.msg.text = '';
    };

    // events that are forwarded are prefixed with 'socket:', like here
    $scope.$on('socket:chat message', function(evt, msg) {
        $scope.messages.push(msg.fromUsername + ': ' + msg.text);
    });

});