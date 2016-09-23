function EntityCtrl (entity, MainService, SectionService, $state) {
  this.entity = new Entity(entity);
  this.data = {
    entity: {
      id: entity.id,
      name: entity.name,
      description: entity.description
    }
  }

  this.destroyEntity = function(id) {
    if (confirm("This will delete this entry. Do you want to continue?")) {
      MainService.destroyEntity(id).then(function (resp) {
	$state.go('entities.index')
      })
    } 
    return 'called';
  }

  this.destroySection = function(id) {
    if (confirm("This will destroy this section and all information within it. Do you want to continue?")) {
      SectionService.destroySection(id).then(function (resp) {
	$state.reload();
      })
    }
  }

  this.upvote = function (id) {  
    MainService.upvote(id).then(function (resp) {
      $state.go($state.current, {}, {reload: true});
    })
  }

  this.downvote = function (id) {
    MainService.downvote(id).then(function (resp) {
      $state.go($state.current, {}, {reload: true});
    })
  }
}

angular
  .module('app')
  .controller('EntityCtrl', EntityCtrl)
