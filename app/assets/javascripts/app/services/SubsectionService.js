function SubsectionService($http) {
  this.getSubsection = function(id) {
    return $http.get('/subsections/' + id);
  }

  this.postSubsection = function (hash) {
    if (hash.subsection.id !== undefined) {
      return $http.patch('/subsections/' + hash.subsection.id, hash).then(function (resp) {return resp});
    } else {
      return $http.post('/subsections', hash).then(function(resp) { 
	return resp
      });
    }
  }
}

angular
  .module('app') 
  .service('SubsectionService', SubsectionService)
