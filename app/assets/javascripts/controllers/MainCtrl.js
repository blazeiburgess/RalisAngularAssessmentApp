function MainCtrl (entities, MainService, $state) {
  var self = this;
  // var entity = "test";

  this.entities = [];

  angular.forEach(entities, function(entitiesResp) {
    self.entities.push(new Entity(entitiesResp))
  });

  this.destroyEntity = function(id) {
    if (confirm("This will delete this entry. Do you want to continue?")) {
      MainService.destroyEntity(id).then(function (resp) {
	$state.go($state.current, {}, {reload: true});
      })
    } 
    return 'called';
  }
}

angular
  .module('app')
  .controller('MainCtrl', MainCtrl)
