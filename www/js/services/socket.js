// makes btford.socket.io available as a service
app.factory('socket', function(socketFactory) {
  
  return socketFactory();
  
});