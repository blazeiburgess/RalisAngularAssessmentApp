function EntityCtrl (entity) {
  this.entity = new Entity(entity);
}

angular
  .module('app')
  .controller('EntityCtrl', EntityCtrl)
