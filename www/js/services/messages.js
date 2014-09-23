app.factory('Messages', function($rootScope, $http) {

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
        }
    };
});