function MainService($http) {
  this.getEntities = function () {
    return $http.get('/entities');
  }

  this.getEntity = function (id) {
    return $http.get('/entities/' + id);
  }
}

angular
  .module('app') 
  .service('MainService', MainService)
