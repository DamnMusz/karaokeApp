app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'www/index.partial.html',
            controller: 'IndexController'
        }).
        when('/karaoke', {
            templateUrl: 'www/index.partial.html',
            controller: 'IndexController'
        })

	/*.
        otherwise({
            redirectTo: '/addOrder'
        })*/;
  }]);

app.controller('IndexController', function ($scope) {
});
