function MainService($http) {
  this.getEntities = function () {
    return $http.get('/entities');
  }

  this.getEntity = function (id) {
    return $http.get('/entities/' + id);
  }

  this.postEntity = function (hash) {
    if (hash.entity.id !== undefined) {
      return $http.post('/entities', hash).then(function(resp) { 
	return resp;
      });
    } else {
      return $http.patch('/entities/' + hash.entity.id, hash).then(function (resp) {
	return resp;
      });
    }
  }
}

angular
  .module('app') 
  .service('MainService', MainService)
