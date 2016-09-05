function CategoryCtrl (categories) {
  var self = this;

  this.categories = [];

  angular.forEach(categories, function(categoriesResp) {
    self.categories.push(new Category(categoriesResp))
  });

  this.addForm = function () {
    $('.form').append('<input type="text" name="categories[]" /><br>'); 
  }
}

angular
  .module('app')
  .controller('CategoryCtrl', CategoryCtrl)
