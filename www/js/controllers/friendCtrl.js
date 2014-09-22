angular.module('starter.controllers')

.controller('FriendCtrl', function($scope, $stateParams, socket, Messages) {
    $scope.messages = Messages.getMessages($stateParams.id);

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

    socket.on('chat message', function(msg) {
        $scope.messages.push(msg.fromUsername + ': ' + msg.text);
    });

    $scope.$on('$destroy', function() {
        console.log('destroyed')
        socket.removeListener('chat message', function() {
            console.log('chat message listener removed')
        });
    })
});