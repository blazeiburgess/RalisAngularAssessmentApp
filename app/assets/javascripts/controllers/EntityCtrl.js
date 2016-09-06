function EntityCtrl (entity) {
  this.entity = new Entity(entity);
  this.data = {
    entity: {
      id: entity.id,
      name: entity.name,
      description: entity.description
    }
  }
}

angular
  .module('app')
  .controller('EntityCtrl', EntityCtrl)
