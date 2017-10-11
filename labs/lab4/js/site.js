// jQuery 3.x-style ready event and locally scoped $
$(document).ready(function() {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('#submit').prop('disabled', true);
  $('#age-verification').click(function() {
    if($('#submit').prop('disabled')) {
      $('#submit').prop('disabled', false).toggleClass('enabled');
    } else {
      $('#submit').prop('disabled', true).toggleClass('enabled');
    }
  })
});
