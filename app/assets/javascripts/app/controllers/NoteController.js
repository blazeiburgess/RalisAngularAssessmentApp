function NoteCtrl (note, NoteService, $state, $stateParams) { 
  var self = this;

  this.note = new Note(note); 
  this.data = {
    note: {
      id: self.note.id,
      title: self.note.title,
      body: self.note.body,
      entity_id: self.note.entity_id,
      subsection_id: self.note.subsection_id
    }
  }; 

  this.postNote = function () { 
    NoteService.postNote(self.data).then(function (resp) { 
      if ($stateParams.entity_id !== undefined) {
	$state.go('entities.show', {id: $stateParams.entity_id});
      } else {
	$state.go('entities.show',{id: self.data.note.entity_id});
      }
    });
    
  }

  this.postGeneralNote = function () { 
    NoteService.postGeneralNote(self.data).then(function (resp) { 
      $state.go('entities.show',{id: self.data.note.entity_id})
    });
    
  }

}

angular
  .module('app')
  .controller('NoteCtrl', NoteCtrl)
