<?php

  $form_data = $_POST['form_data']
  $decoded = json_decode($form_data, true);

  var_dump($decoded)

  function send_email() {
    $to = "timothytucker@berkeley.edu";
    $subject = $_POST["subject"] . " - " . $_POST["name"];
    $message = $_POST["message"];

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . $_POST["email"] . "\r\n";

    mail($to, $subject, $message, $headers);
  }

?>
