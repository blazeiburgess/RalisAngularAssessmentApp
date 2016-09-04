function CategoryCtrl (categories) {
  var self = this;

  this.categories = [];

  angular.forEach(categories, function(categoriesResp) {
    self.categories.push(new Category(categoriesResp))
  });

  this.addForm = function () {
    $(this).parent().append('<form><input type="text" ng-model="category" name="name" /></form>');
  }
}

angular
  .module('app')
  .controller('CategoryCtrl', CategoryCtrl)
