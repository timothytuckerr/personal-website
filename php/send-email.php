<?php

  $form_data = $_POST['form_data']
  $decoded = json_decode($form_data, true);
  send_email($decoded);

  function send_email($decoded) {
    $to = "timothytucker@berkeley.edu";
    $subject = $decoded['subject'] . " - " . $decoded['name'];
    $message = $decoded['message'];

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . $decoded['email'] . "\r\n";

    mail($to, $subject, $message, $headers);
  }

?>
