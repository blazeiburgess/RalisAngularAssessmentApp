function LinkService($http) {
  this.postGeneralLink = function (hash) { 
    return $http.post('/general_links', hash).then(function(resp) { 
      return resp
    });
  }

  this.postLink = function (hash) {
    return $http.post('/links', hash).then(function(resp) { 
      return resp
    });
  }
}

angular
  .module('app') 
  .service('LinkService', LinkService)
