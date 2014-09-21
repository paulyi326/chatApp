// angular.module('starter', ['ionic', 'starter.controllers'])

app.factory('socket', function($rootScope) {
  
  // in order to get this to work, i had to go configure the
  // server on azure to allow for websockets
  // port number is required
  var socket = io('http://wecudoschat.azurewebsites.net:80');

  // wrapper for socket object
  return {
    on: function(evt, callback) {
      socket.on(evt, function() {
        var args = arguments;
        $rootScope.$apply(function() {
          callback.apply(socket, args);
        });
      });
    },
    emit: function(evt, data, callback) {
      socket.emit(evt, data, function() {
        var args = arguments;
        $rootScope.$apply(function() {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    }
  };

});