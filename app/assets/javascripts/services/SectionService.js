function SectionService($http) {
  this.getSection = function (id) {  
    return $http.get('/sections/' + id); 
  }

  this.postSection = function (hash) {
    if (hash.section.id !== undefined) {
      return $http.patch('/sections/' + hash.section.id, hash).then(function(resp) { return resp });
    } else {
      return $http.post('/sections', hash).then(function(resp) { 
	return resp
      });
    }
  }

  this.destroySection = function (id) {
    return $http.delete('/sections/' + id);
  }
}

angular
  .module('app') 
  .service('SectionService', SectionService)
