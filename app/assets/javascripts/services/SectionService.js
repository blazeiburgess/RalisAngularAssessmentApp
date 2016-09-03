function SectionService($http) {
  this.getSections = function () {
    return $http.get('/sections');
  }

  this.getSection = function (id) {
    return $http.get('/sections/' + id);
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
