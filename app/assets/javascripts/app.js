angular
  .module('app', ['ngMessages', 'ui.router', 'templates', 'ng-rails-csrf'])
  // tab directive credit to Anita Salunke:
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
	controller: 'MainCtrl as main'
      })
      .state('entities', {
	abstract: true,
	url: '',
	template: '<div ui-view></div>'
      })
      .state('entities.index', {
	url: '/entities',
	templateUrl: 'views/entities.html',
	controller: 'MainCtrl as main',
	resolve: {
	  entities: function (MainService) {
	    return MainService.getEntities().then(function (resp) {console.log(resp); return resp.data});
	  }
	}
      })
    .state('entities.new', {
      url: '/entities/new',
      templateUrl: 'views/entity_form.html',
      controller: 'NewEntityCtrl as ctrl',
      resolve: {
	entity: function () {
	  return { name: "", description: "" }; 
	}
      }
    })    
    .state('entities.show', {
      url: '/entities/:id',
      templateUrl: 'views/entity.html',
      controller: 'EntityCtrl as ctrl',
      resolve: { 
	entity: function (MainService, $stateParams) {
	  return MainService.getEntity($stateParams.id).then(function (resp) { console.log(resp); return resp.data })
	}
      }
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
	},
	cat: function () {
	  return {};
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
    .state('category.add', {
      url: '/entities/:entity_id/categories/join',
      templateUrl: 'views/add_category.html',
      controller: 'CategoryCtrl as ctrl',
      resolve: {
	categories: function (CategoryService) {
	  return CategoryService.getCategories().then(function (resp) {return resp.data});
	}
      }
    })
    .state('sections', {
      abstract: true,
      url: '',
      template: '<div ui-view></div>'
    })
    .state('sections.new', {
      url: '/entities/:id/sections/new',
      templateUrl: 'views/section_form.html',
      controller: 'SectionCtrl as ctrl',
      resolve: {
	section: function ($stateParams) {
	  return {
	    name: "", 
	    description: "", 
	    entity_id: $stateParams.id
	  }
	}
      }
    })
    .state('generalLinks', {
      abstract: true,
      url: '',
      template: '<div ui-view></div>'
    })
    .state('generalLinks.new', {
      url: '/entities/:entity_id/links/new',
      templateUrl: 'views/general_link_form.html',
      controller: 'LinkCtrl as ctrl',
      resolve: {
	link: function ($stateParams) {
	  return {
	    name: "",
	    description: "",
	    href: "",
	    archive: "",
	    entity_id: $stateParams.entity_id
	  }
	}
      }
    })
    .state('generalNotes', {
      abstract: true,
      url: '',
      template: '<div ui-view></div>'
    })
    .state('generalNotes.new', {
      url: '/entities/:entity_id/notes/new',
      templateUrl: 'views/general_note_form.html',
      controller: 'NoteCtrl as ctrl',
      resolve: {
	note: function ($stateParams) {
	  return {
	    title: "",
	    body: "",
	    entity_id: $stateParams.entity_id
	  }
	}
      }
    })
    .state('generalNotes.edit', {
      url: '/general_notes/:general_note_id/edit',
      templateUrl: 'views/general_note_form.html',
      controller: 'NoteCtrl as ctrl',
      resolve: {
	note: function (NoteService, $stateParams) {
	  return NoteService.getNote($stateParams.general_note_id);
	}
      }
    })
    .state('links', {
      abstract: true,
      url: '',
      template: '<div ui-view></div>'
    })
    .state('links.new', {
      url: '/entities/:entity_id/subsections/:subsection_id/links/new',
      templateUrl: 'views/link_form.html',
      controller: 'LinkCtrl as ctrl',
      resolve: {
	link: function ($stateParams) {
	  return {
	    name: "",
	    description: "",
	    href: "",
	    archive: "",
	    entity_id: $stateParams.entity_id,
	    subsection_id: $stateParams.subsection_id
	  }
	}
      }
    })
    .state('notes', {
      abstract: true,
      url: '',
      template: '<div ui-view></div>'
    })
    .state('notes.new', {
      url: '/entities/:entity_id/subsections/:subsection_id/notes/new',
      templateUrl: 'views/note_form.html',
      controller: 'NoteCtrl as ctrl',
      resolve: {
	note: function ($stateParams) {
	  return {
	    name: "",
	    description: "",
	    href: "",
	    archive: "",
	    entity_id: $stateParams.entity_id,
	    subsection_id: $stateParams.subsection_id
	  }
	}
      }
    })
    .state('subsections', {
      abstract: true,
      url: '',
      template: '<div ui-view></div>'
    })
    .state('subsections.new', {
      url: '/entities/:entity_id/sections/:section_id/subsections/new',
      templateUrl: 'views/subsection_form.html',
      controller: 'SubsectionCtrl as ctrl',
      resolve: {
	subsection: function ($stateParams) {
	  return {
	    name: "",
	    description: "",
	    entity_id: $stateParams.entity_id,
	    section_id: $stateParams.section_id
	  }
	}
      }
    })
    $urlRouterProvider.otherwise('home')
  }])
