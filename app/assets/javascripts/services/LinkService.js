function LinkService($http) {
  this.postLink = function (hash) {
    return $http.post('/links', hash).then(function(resp) { 
      return resp
    });
  }
}

angular
  .module('app') 
  .service('LinkService', LinkService)
