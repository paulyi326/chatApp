app.factory('Messages', function($rootScope, $http) {

    return {
        getMessages: function(friendID) {
            // Probably will make database call here
            // to get all messages between you and particular friend

            // return [
            //     'yo',
            //     'sup',
            //     'not much, how are you?',
            //     'im good'
            // ];

            return $http({
                        method: 'GET',
                        url: 'http://wecudoschat.azurewebsites.net/getMessages',
                        data: {
                            userID: $rootScope.user.id,
                            friendID: friendID
                        },
                        headers: {
                           'Content-Type': 'application/json; charset=utf-8'
                        }
                    });
        }
    };
});