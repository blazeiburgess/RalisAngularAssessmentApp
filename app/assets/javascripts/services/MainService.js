function MainService($http) {
  this.getEntities = function () {
    return $http.get('/entities');
  }

  this.getEntity = function (id) {
    return $http.get('/entities/' + id);
  }

  this.postEntity = function (hash) {
    return $http.post('/entities', hash).then(function (resp) {
      alert(response.status);
    });
  }
}

angular
  .module('app') 
  .service('MainService', MainService)
