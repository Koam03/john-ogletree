<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Prepare email data
        $to = "jo783750@gmail.com";  // Replace with your email address
        $subject = "New Newsletter Signup";
        $message = "You have a new newsletter signup from: " . $email;
        $headers = "From: no-reply@example.com\r\n";  //
