function SectionCtrl (section, SectionService, $state) {
  var self = this;
  this.section = new Section(section);

  this.data = {
    section: {
      name: self.section.name,
      description: self.section.description
    }
  }

  this.postSection = function () {
    SectionService.postSection(self.data).then(function (resp) {
      $state.go('entities.show',{id: resp.data.entity_id})
    });
    
  }

}

angular
  .module('app')
  .controller('SectionCtrl', SectionCtrl)
