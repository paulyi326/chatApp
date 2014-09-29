app.factory('Database', function($rootScope, $http) {

  return {
    getMessages: function(friendID) {
      return $http({
        method: 'GET',
        url: 'http://wecudoschat.azurewebsites.net/getMessages',
        params: {
          userID: $rootScope.user.id,
          friendID: friendID
        }
      });
    },

    getFriends: function(userID) {
      return $http({
        method: 'GET',
        url: 'http://wecudoschat.azurewebsites.net/getFriends',
        params: {
          userID: $rootScope.user.id
        }
      });
    }
  };
});