<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $to = 'youremail@example.com';
  $headers = "From: $email\r\nReply-To: $email\r\n";
  $body = "Name: $name\nEmail: $email\nCountry: $country\nMessage:\n$message";

  mail($to, $subject, $body, $headers);

  header('Location: thanks.html');
?>
