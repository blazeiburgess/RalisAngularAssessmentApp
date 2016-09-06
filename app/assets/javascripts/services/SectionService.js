function SectionService($http) {
  this.getSection = function (id) {
    return $http.get('/sections/' + id, hash)
  }

  this.postSection = function (hash) {
    return $http.post('/sections', hash).then(function(resp) { 
      return resp
    });
  }
}

angular
  .module('app') 
  .service('SectionService', SectionService)
