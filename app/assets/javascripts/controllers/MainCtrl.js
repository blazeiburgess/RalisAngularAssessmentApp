function MainCtrl (entities) {
  var self = this;
  var entity = "test";
  this.test = "This is test text";
  this.entities = [];

  angular.forEach(entities, function(entitiesResp) {
    self.entities.push(new Entity(entitiesResp))
  });
}

angular
  .module('app')
  .controller('MainCtrl', MainCtrl)
