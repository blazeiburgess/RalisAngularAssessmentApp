function SectionService($http) {
  this.postSection = function (hash) {
    return $http.post('/sections', hash).then(function(resp) { 
      return resp
    });
  }
}

angular
  .module('app') 
  .service('SectionService', SectionService)
