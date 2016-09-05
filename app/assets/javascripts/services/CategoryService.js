function CategoryService($http) {
  this.getCategories = function () {
    return $http.get('/categories');
  }

  this.getCategory = function (id) {
    return $http.get('/categories/' + id);
  }
 
  this.postCategory = function (hash) {
  alert('service');
    return $http.post('/categories', hash);
  }
}

angular
  .module('app') 
  .service('CategoryService', CategoryService)
