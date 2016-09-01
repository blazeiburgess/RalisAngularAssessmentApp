angular
  .module('app', ['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
	url: '/home',
	templateUrl: 'views/home.html',
	controller: 'MainCtrl as main',
	resolve: {
	  entities: function (MainService) {
	    return MainService.getEntities().then(function (resp) {console.log(resp); return resp.data});
	  }
	}
      })
      .state('entities', {
	url: '/entities/:id',
	templateUrl: 'views/entities.html',
	controller: 'EntityCtrl as entity',
	resolve: { 
	  entity: function (MainService, $stateParams) {
	    debugger;
	    return MainService.getEntity($stateParams.id).then(function (resp) { console.log(resp); return resp.data })
	  }
	}
      });
    $urlRouterProvider.otherwise('home')
  }])
