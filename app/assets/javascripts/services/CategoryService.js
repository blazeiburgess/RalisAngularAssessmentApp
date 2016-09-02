function CategoryService($http) {
  this.getCategories = function () {
    return $http.get('/categories');
  }

  this.getCategory = function (id) {
    return $http.get('/categories/' + id);
  }
}

angular
  .module('app') 
  .service('CategoryService', CategoryService)
