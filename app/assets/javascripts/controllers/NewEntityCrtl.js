function NewEntityCtrl (entity, EntityCtrl, $state) {
  var self = this;
  this.entity = new Entity(entity);

}

angular
  .module('app')
  .controller('NewEntityCtrl', NewEntityCtrl)
