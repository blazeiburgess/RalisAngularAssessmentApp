function NoteService($http) {
  this.getNote = function (id) {
    return $http.get('/general_notes/' + id);
  }

  this.postGeneralNote = function (hash) {
    if (hash.id !== undefined) {
      return $http.post('/general_notes', hash).then(function(resp) { 
	return resp
      });
    } else {
      return $http.patch('/general_notes/' + hash.note.id, hash).then(function(resp) {
	return resp
      });
    }
  }

  this.postNote = function (hash) {
    return $http.post('/notes', hash).then(function(resp) { 
      return resp
    });
  }
}

angular
  .module('app') 
  .service('NoteService', NoteService)
