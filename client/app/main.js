'use strict'

angular
  .module('mean101', ["ngRoute"])   //inject [in here] to make available to controllers
  .config($routeProvider =>
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'partials/main.html',
      })
      .when('/chat', {
        controller: 'ChatCtrl',
        templateUrl: 'partials/chat.html',
      })
  )
  .controller('MainCtrl', function ($scope, $http) {
    $http
      .get("/api/title")
      // .then((data) => 
      //   $scope.title = data.data.title
     //destructured BELOW:
      .then(({ data: { title }}) =>
        $scope.title = title
      )
  })
  .controller('ChatCtrl', function ($scope, $http) {
    $scope.sendMessage = () => {
      const msg = {
        author: $scope.author,
        content: $scope.content,
      }

      $http
        .post('/api/messages', msg)
        .then(() => $scope.messages.push(msg))
        .catch(console.error)
    }

    $http
      .get('/api/messages')
      .then(({ data: { messages }}) =>
        $scope.messages = messages
      )
  })
