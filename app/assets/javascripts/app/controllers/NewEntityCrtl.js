function NewEntityCtrl (entity, MainService, $state, $stateParams) {
  var self = this;
  this.entity = new Entity(entity);

  this.data = {
    entity: {
      id: self.entity.id,
      name: self.entity.name,
      description: self.entity.description
    }
  }

  this.postEntity = function () {
    MainService.postEntity(self.data).then(function (resp) {
      if ($stateParams.id !== undefined) {
	$state.go('entities.show', {id: $stateParams.id})
      } else {
	$state.go('entities.show',{id: resp.data.id})
      } 
    });
    
  }

}

angular
  .module('app')
  .controller('NewEntityCtrl', NewEntityCtrl)
