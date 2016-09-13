function SubsectionCtrl (subsection, SubsectionService, $state, $stateParams) {
  var self = this;
  this.subsection = new Subsection(subsection); 

  this.data = {
    subsection: {
      id: self.subsection.id,
      name: self.subsection.name,
      description: self.subsection.description,
      entity_id: $stateParams.entity_id,
      section_id: self.subsection.section_id
    }
  }

  this.postSubsection = function () { 
    SubsectionService.postSubsection(self.data).then(function (resp) { 
      $state.go('entities.show',{id: self.data.subsection.entity_id})
    });
    
  }

}

angular
  .module('app')
  .controller('SubsectionCtrl', SubsectionCtrl)
