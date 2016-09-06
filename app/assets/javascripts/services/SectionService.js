function SectionService($http) {
  this.getSection = function (id) {  
    return $http.get('/sections/' + id); 
  }

  this.postSection = function (hash) {
    console.log(hash)
    if (hash.section.id !== undefined) {
      return $http.patch('/sections/' + hash.section.id, hash).then(function(resp) { return resp });
    } else {
      return $http.post('/sections', hash).then(function(resp) { 
	return resp
      });
    }
  }
}

angular
  .module('app') 
  .service('SectionService', SectionService)
