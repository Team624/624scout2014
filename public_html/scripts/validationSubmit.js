//submit.js
(function() { 

$(document).ready(function() {
  $('#password').focus();
  $('#submitPW').click(function() {
    console.log($('#password').val());
    $.post('/?controller=loginer&action=login', $('#password').val(), function(dat) {
      window.setTimeout(function() {
        location.reload(true); 
      }, 10);
    }).fail(function(dat) {
      alertify.error(dat.responseText);
      console.log(dat.responseText);
      $('#password').val('');
      
    });
  });
});

})();
