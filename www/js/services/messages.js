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
            console.log(friendID)

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