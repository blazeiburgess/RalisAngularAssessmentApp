function SubsectionCtrl (subsection, SubsectionService, $state) {
  var self = this;
  this.subsection = new Subsection(subsection);

  this.data = {
    subsection: {
      name: self.subsection.name,
      description: self.subsection.description,
      entity_id: self.subsection.entity_id,
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
