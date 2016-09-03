angular
  .module('app', ['ui.router', 'templates'])
  // directive credit to Anita Salunke:
  //   http://codepen.io/anita_salunke
  .directive('tabDynamic', function(){
    return{
      restrict: 'ACE',
      link: function(scope, element, attributes){
	var ele = angular.element(element);
	ele.bind('click', function(e){
	  var tabLink = ele.attr('href');
	  angular.element('.dynamic-tab-container .tab-content:visible').hide();
	  angular.element('.dynamic-tab-container .tab-content.active').removeClass('active');
	  angular.element('.dynamic-tab-container #tabs a.current').removeClass();
	  angular.element(tabLink).show();
	  ele.addClass('current');
	  e.preventDefault();
	});
      },
    }
  })
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
      abstract: true,
      url: '',
      template: '<div ui-view></div>'
    })
    .state('entities.index', {
      url: '/entities/:id',
      templateUrl: 'views/entities.html',
      controller: 'EntityCtrl as ctrl',
      resolve: { 
	entity: function (MainService, $stateParams) {
	  return MainService.getEntity($stateParams.id).then(function (resp) { console.log(resp); return resp.data })
	}
      }
    })
    .state('entities.new', {
      url: '/entities/new',
      templateUrl: 'views/entity_form.html',
      controller: 'NewEntityCtrl as ctrl',
      // resolve: {
	// entity: function (NewEntityCtrl) {
	//   return {};
	// }
      // }
    })    
    .state('category', {
      abstract: true,
      url: '',
      template: '<div ui-view></div>'
    })
    .state('category.index', {
      url: '/categories',
      templateUrl: 'views/categories.html',
      controller: 'CategoryCtrl as ctrl',
      resolve: {
	categories: function (CategoryService) {
	  return CategoryService.getCategories().then(function (resp) {return resp.data});
	}
      }
    })
    .state('category.show', {
      url: '/categories/:id',
      templateUrl: 'views/category.html',
      controller: 'CategoryShowCtrl as ctrl',
      resolve: {
	category: function ($stateParams, CategoryService) {
	  return CategoryService.getCategory($stateParams.id).then(function (resp) {return resp.data});
	}
      }
    })
    $urlRouterProvider.otherwise('home')
  }])
