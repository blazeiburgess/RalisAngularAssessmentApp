angular
  .module('app', ['ui.router', 'templates'])
  .service('entitiesService', function ($http) {
    return $http.get('/entities');
  })
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
	url: '/home',
	templateUrl: 'main/_home.html',
	controller: 'MainCtrl as main',
	// resolve: function (entitiesService) {
	//   debugger;
	//   entitiesService();
	// }
      })
    $urlRouterProvider.otherwise('home')
  }])
