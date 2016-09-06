function SubsectionService($http) {
  this.getSubsection = function(id) {
    return $http.get('/subsections/' + id);
  }

  this.postSubsection = function (hash) {
    return $http.post('/subsections', hash).then(function(resp) { 
      return resp
    });
  }
}

angular
  .module('app') 
  .service('SubsectionService', SubsectionService)
