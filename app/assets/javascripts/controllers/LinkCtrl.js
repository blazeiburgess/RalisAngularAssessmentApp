function LinkCtrl (link, LinkService, $state) {
  var self = this;
  this.link = new Link(link);

  this.data = {
    link: {
      name: self.link.name,
      description: self.link.description,
      href: self.link.href,
      archive: self.link.archive,
      entity_id: self.link.entity_id,
      section_id: self.link.section_id
    }
  }

  this.postLink = function () { 
    LinkService.postLink(self.data).then(function (resp) { 
      $state.go('entities.show',{id: self.data.link.entity_id})
    });
    
  }

}

angular
  .module('app')
  .controller('LinkCtrl', LinkCtrl)
