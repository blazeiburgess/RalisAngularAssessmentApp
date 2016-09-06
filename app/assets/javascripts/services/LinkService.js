function LinkService($http) {
  this.getLink = function (id, type) {
    if (type === "general") {
      return $http.get('/general_links/' + id);
    } else {
      return $http.get('/links/' + id);
    }
  }

  this.postGeneralLink = function (hash) {  
    if (hash.link.id === undefined) {
      return $http.post('/general_links', hash).then(function(resp) { 
	return resp;
      });
    } else {
      return $http.patch('/general_links/' + hash.link.id, hash).then(function(resp) {
	return resp;
      });
    }
  }

  this.postLink = function (hash) { 
    if (hash.link.id !== undefined) {
      return $http.patch('/links/' + hash.link.id, hash).then(function (resp) {
	return resp;
      });
    } else {
      return $http.post('/links', hash).then(function(resp) { 
	return resp;
      });
    }
  }
}

angular
  .module('app') 
  .service('LinkService', LinkService)
