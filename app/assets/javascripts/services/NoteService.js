function NoteService($http) {
  this.getNote = function (id) {
    return $http.get('/general_notes/' + id);
  }

  this.postGeneralNote = function (hash) {
    return $http.post('/general_notes', hash).then(function(resp) { 
      return resp
    });
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
