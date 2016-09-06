function LinkCtrl (link, LinkService, $state, $stateParams) { 
  var self = this;
  
  this.link = new Link(link);
  // alert('controller');
  this.data = {
    link: {
      id: self.link.id,
      title: self.link.title,
      description: self.link.description,
      href: self.link.href,
      archive: self.link.archive,
      entity_id: self.link.entity_id,
      subsection_id: self.link.subsection_id
    }
  }; 

  this.postLink = function () { 
    LinkService.postLink(self.data).then(function (resp) { 
      if ($stateParams.entity_id !== undefined) {
	$state.go('entities.show', {id: $stateParams.entity_id})
      } else {
	$state.go('entities.show',{id: self.data.link.entity_id})
      }
    });
    
  }

  this.postGeneralLink = function () { 
    LinkService.postGeneralLink(self.data).then(function (resp) { 
      $state.go('entities.show',{id: self.data.link.entity_id})
    });
    
  }

}

angular
  .module('app')
  .controller('LinkCtrl', LinkCtrl)
