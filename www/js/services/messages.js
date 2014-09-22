app.factory('Messages', function() {

    var messages = [
                    'how are you?',
                    'im good, what are you up to?',
                    'coding',
                    'lets go out later'
                   ];

    return {
        getMessages: function(friendID) {
            // Probably will make database call here
            // to get all messages between you and particular friend

            return messages;
        }
    };
});