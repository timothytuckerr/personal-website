$(document).ready(function() {
  $(".submit-button").click(function() {
    const form_data = {
      'name': document.getElementById("user_name").value,
      'email': document.getElementById("user_email").value,
      'subject': document.getElementById("user_subject").value,
      'message': document.getElementById("user_message").value
    };
    const form_data_str = JSON.stringify(form_data);
    $.ajax({
      url: 'php/send-email.php',
      type: "POST",
      data: {form_data: form_data_str},
      success: function(response) {
        console.log(response);
      }
    })
  })
})
