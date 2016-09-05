function CategoryCtrl (categories, CategoryService, $state, $stateParams) {
  var self = this;

  this.categories = []; 

  this.entity_id = $stateParams.entity_id;

  this.data = {
    category: {
      name: ''
    }
  }

  this.entity_cat_data = {
    entity_category: {
      entity_id: '',
      category_id: ''
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

  this.postEntityCategory = function () {
    CategoryService.postEntityCategory(self.entity_cat_data)
    $state.go('entities.index');
  }

  $('.hidden').hide()
}

angular
  .module('app')
  .controller('CategoryCtrl', CategoryCtrl)
