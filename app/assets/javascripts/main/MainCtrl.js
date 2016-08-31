function MainCtrl () {
  this.test = "This is changed test text"
}

angular
  .module('app')
  .controller('MainCtrl', MainCtrl)
