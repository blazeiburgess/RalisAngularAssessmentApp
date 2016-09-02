function CategoryCtrl (categories) {
  var self = this;

  this.categories = [];

  angular.forEach(categories, function(categoriesResp) {
    self.categories.push(new Category(categoriesResp))
  });
}

angular
  .module('app')
  .controller('CategoryCtrl', CategoryCtrl)
