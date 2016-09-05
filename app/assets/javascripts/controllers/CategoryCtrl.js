function CategoryCtrl (categories, CategoryService, $state) {
  var self = this;

  this.categories = []; 

  this.data = {
    category: {
      name: ''
    }
  }

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

  this.postCategories = function () { 
    CategoryService.postCategory(self.data).then(function (resp) {
      self.categories.push(new Category(resp.data))
    }); 
    $state.go('category.index');
    // alert(self.categories);
    $('input[type="text"]').val('');
    $('input[type="text"]').text('');
    self.hideForm()
  }
  $('.hidden').hide()
}

angular
  .module('app')
  .controller('CategoryCtrl', CategoryCtrl)
