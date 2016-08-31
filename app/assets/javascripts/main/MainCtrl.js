function MainCtrl ($http) {
  this.test = "This is changed test text";
  this.posts = $http.get('/entities')
}

angular
  .module('app')
  .controller('MainCtrl', ['$http', MainCtrl])
