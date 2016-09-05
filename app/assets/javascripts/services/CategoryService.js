function CategoryService($http) {
  this.getCategories = function () {
    return $http.get('/categories');
  }

  this.getCategory = function (id) {
    return $http.get('/categories/' + id);
  }
 
  this.postCategory = function (hash) {
    return $http.post('/categories', hash);
  }

  this.postEntityCategory = function (hash) {
    return $http.post('/entity_categories', hash);
  }
}

angular
  .module('app') 
  .service('CategoryService', CategoryService)
