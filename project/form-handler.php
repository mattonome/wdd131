<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'info@mysupremacymagazine.com';
$email_subject = 'New Form Submission';
$email_body = "User Name: $name.\n".
              "User Email: $visitor_email\n".  
              "Subject: $subject.\n".  //  Removed incorrect semicolon
              "User Message: $message.\n"; //  Now correctly concatenated

$to = 'mattj4all@gmail.com';
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n"; //  Proper concatenation using .=

mail($to, $email_subject, $email_body, $headers);

header("Location: contact.html");
exit(); //  Always use exit() after header redirect to stop script execution

?>
