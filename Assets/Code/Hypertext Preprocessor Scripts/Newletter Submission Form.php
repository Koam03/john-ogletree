<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['full-name'];
    $email = $_POST['email'];

    $to = "john.ogletree@john-ogletree.com"; // Your Gmail email address
    $subject = "New Newsletter Submission from " . $fullName;
    $message = "You have received a new newsletter sign-up.\n\nFull Name: $fullName\nEmail Address: $email";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for subscribing to the newsletter!";
    } else {
        echo "There was an issue with your submission. Please try again later.";
    }
}
?>