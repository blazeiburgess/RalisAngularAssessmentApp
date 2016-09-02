function CategoryShowCtrl (category) {
  this.category = new Category(category);
}

angular
  .module('app')
  .controller('CategoryShowCtrl', CategoryShowCtrl)
