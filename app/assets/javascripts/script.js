function scrollUp () {
  $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function scrollDown () {
  $('html, body').animate({ scrollTop: document.body.scrollHeight}, 'fast');
}
$(document).ready(function () {

  $('.scrollDown').on('click', function (event) {
    event.preventDefault();
    scrollDown()
  });
})
