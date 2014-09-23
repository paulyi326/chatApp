angular.module('starter.controllers')

.controller('FriendCtrl', function($rootScope, $scope, $stateParams, socket, Messages) {

    // This forwards the chat message event to angular so that
    // when switching back and forth between controllers, duplicate 
    // event listeners aren't created. Angular will clean up listeners
    // once a scope is destroyed
    socket.forward('chat message', $scope);
    var friendID = $stateParams.friendID;

    $scope.messages = [];

    // events that are forwarded are prefixed with 'socket:', like here
    // add incoming messages to messages array
    $scope.$on('socket:chat message', function(evt, msg) {
        $scope.messages.push(msg.fromUsername + ': ' + msg.text);
    });

    $scope.msg = { text: '' };

    $scope.sendMessage = function(msg) {
        console.log(msg); 
        var message = {
            // this needs to be changed to msg.to eventually.
            // i needed it to be 7, since no one else was in any room
            // so messages weren't being sent 
            to: $rootScope.user.id,
            from: $rootScope.user.id,
            text: msg
        }
        socket.emit('chat message', message);
        $scope.msg.text = '';
    };

    // retrieve messages from server.
    // server will send the messages thru socket.io, so nothing
    // to do in the success function in this call to server
    Messages.getMessages(friendID)
    .success(function(data, status, headers, config) {
        console.log('success data', data);
    }).error(function(data, status, headers, config) {
        console.log('error data', data);
    });

});
