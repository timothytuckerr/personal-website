$(document).ready(function() {
  $('.submit-button').click(function() {
    var clickBtnValue = $(this).val();
    var email_url = 'send-email.php';
    data = {'action': clickBtnValue};
    $.post(email_url, data, function() {
      alert("email sent");
    })
  })
})
