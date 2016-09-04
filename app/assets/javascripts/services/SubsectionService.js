function SubsectionService($http) {
  this.postSubsection = function (hash) {
    return $http.post('/subsections', hash).then(function(resp) { 
      return resp
    });
  }
}

angular
  .module('app') 
  .service('SubsectionService', SubsectionService)
