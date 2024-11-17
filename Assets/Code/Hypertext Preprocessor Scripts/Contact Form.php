<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['full-name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "your-email@gmail.com"; // Your Gmail email address
    $subject = "New Contact Message from " . $fullName;
    $messageBody = "You have received a new message via the contact form.\n\nFull Name: $fullName\nEmail Address: $email\nMessage: $message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Thank you for reaching out! Your message has been sent.";
    } else {
        echo "There was an issue with your submission. Please try again later.";
    }
}
?>
