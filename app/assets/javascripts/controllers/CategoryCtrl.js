function CategoryCtrl (categories, CategoryService) {
  var self = this;

  this.categories = [];

  angular.forEach(categories, function(categoriesResp) {
    self.categories.push(new Category(categoriesResp))
  });

  this.addForm = function () {
    // $('.form').append('<input type="text" name="categories[]" placeholder="Category name..." /><br>'); 
    $('.hidden').show();
  }

  this.hideForm = function () {
    $('.hidden').hide();
  }

  this.postCategories = function (data) { 
    CategoryService.postCategory(data).then(function (resp) {
      self.categories.push(new Category(resp))
    });
  }
  $('.hidden').hide()
}

angular
  .module('app')
  .controller('CategoryCtrl', CategoryCtrl)
