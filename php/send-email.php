<?php
  if (isset($_POST['action'])) {
    send_email();
  }

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
