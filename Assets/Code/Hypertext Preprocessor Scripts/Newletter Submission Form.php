<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email from the form
    $email = $_POST['email'];

    // Recipient email address (your Gmail)
    $to = "john@john-ogletree.com";
    $subject = "New Newsletter Subscription";

    // Email content
    $message = "A new user has subscribed to your newsletter:\n\nEmail: " . $email;
    $headers = "From: no-reply@john-ogletree.com";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for subscribing!";
    } else {
        echo "There was a problem with the submission. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>