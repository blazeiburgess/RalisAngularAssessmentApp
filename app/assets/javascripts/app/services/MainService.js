function MainService($http) {
  this.getEntities = function () {
    return $http.get('/entities');
  }

  this.getSearch = function(query) {
    return $http.get('/entities-search/' + query)
  }

  this.getByCats = function(query) {
    return $http.get('/categories-search/' + query)
  }

  this.getEntity = function (id) {
    return $http.get('/entities/' + id);
  }

  this.postEntity = function (hash) { 
    if (hash.entity.id === undefined) {
      return $http.post('/entities', hash).then(function(resp) { 
	return resp;
      });
    } else {
      return $http.patch('/entities/' + hash.entity.id, hash).then(function (resp) {
	return resp;
      });
    }
  }

  this.destroyEntity = function (id) {
    return $http.delete('/entities/' + id);
  }

  this.upvote = function (id) {
    return $http.post('/entities/' + id + "/upvote");
  }

  this.downvote = function (id) {
    return $http.post('/entities/' + id + '/downvote');
  }
}

angular
  .module('app') 
  .service('MainService', MainService)
