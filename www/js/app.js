// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'btford.socket-io', 'starter.controllers']);

app.run(function($rootScope, $ionicPlatform, socket) {
  $ionicPlatform.ready(function() {
  // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
  // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  // In real appliation, emitting the join will have to happen 
  // upon a successful login.
  $rootScope.user = {
    id: 1
  }
  socket.emit('join', $rootScope.user.id);

})

.config(function($stateProvider, $urlRouterProvider) {

  // if none of the below states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/friends');

  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.friends', {
      url: "/friends",
      views: {
        'menuContent' :{
          templateUrl: "templates/friends.html",
          controller: 'FriendsCtrl'
        }
      }
    })

    .state('app.friendDetail', {
      url: "/friends/:friendID",
      views: {
        'menuContent' :{
          templateUrl: "templates/friend.html",
          controller: 'FriendCtrl'
        }
      }
    });
});

