<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mail_from = $_POST['email'];
  $user_subject = $_POST['subject'];
  $message = $_POST['message'];

  $mail_to = "timothytucker@berkeley.edu";
  $email_subject = "WEBSITE CONTACT - " . $name;
  $headers = "From: " . $mail_from;
  $email_text = "Email from: " . $name . "\nSubject: " . $user_subject . "\n\n" . $message;

  mail($mail_to, $email_subject, $email_text, $headers);
  header("Location: index.html?mailsend");
}

?>
