function CategoryCtrl (categories) {
  var self = this;

  this.categories = [];

  this.data = {
    categories: [
      self.categories
    ]
  }

  angular.forEach(categories, function(categoriesResp) {
    self.categories.push(new Category(categoriesResp))
  });

  this.addForm = function () {
    $('.form').append('<input type="text" name="categories[]" placeholder="Category name..." /><br>'); 
    $('.hidden').show();
  }

  this.postCategories = function () { 
    CategoryService.postCategories(self.data).then(function (resp) {
      self.categories.push(new Category(resp))
    });
  }
  $('.hidden').hide()
}

angular
  .module('app')
  .controller('CategoryCtrl', CategoryCtrl)
