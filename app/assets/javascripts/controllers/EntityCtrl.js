function EntityCtrl (entity, MainService, $state) {
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
}

angular
  .module('app')
  .controller('EntityCtrl', EntityCtrl)
