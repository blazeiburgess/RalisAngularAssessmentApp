function NoteService($http) {
  this.getNote = function (id, type) {
    if (type === "general") {
      return $http.get('/general_notes/' + id);
    } else {
      return $http.get('/notes/' + id);
    }
  }

  this.postGeneralNote = function (hash) {
    console.log(hash);
    if (hash.note.id === undefined) {
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
    if (hash.note.id !== undefined) {
      return $http.patch('/notes/' + hash.note.id, hash).then(function (resp) {
	return resp;
      });
    } else {
      return $http.post('/notes', hash).then(function(resp) { 
	return resp
      });
    }
  }
}

angular
  .module('app') 
  .service('NoteService', NoteService)
