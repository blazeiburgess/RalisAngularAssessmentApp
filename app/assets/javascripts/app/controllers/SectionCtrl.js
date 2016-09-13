function SectionCtrl (section, SectionService, $state) {
  var self = this;
  if (section.data !== undefined) {
    this.section = new Section(section.data);
  } else {
    this.section = new Section(section);
  }

  this.data = {
    section: {
      id: self.section.id,
      name: self.section.name,
      description: self.section.description,
      entity_id: self.section.entity_id
    }
  }

  this.postSection = function () { 
    SectionService.postSection(self.data).then(function (resp) { 
      $state.go('entities.show',{id: self.data.section.entity_id})
    });
    
  }

}

angular
  .module('app')
  .controller('SectionCtrl', SectionCtrl)
