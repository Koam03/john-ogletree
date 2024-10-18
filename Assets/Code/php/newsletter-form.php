<?php
// newsletter-form.php

// Set the recipient email address.
// Replace this with your actual email address.
$recipientEmail = "john.ogletree@john-ogletree.com";

// Check if the form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize the email input
    if (isset($_POST['email'])) {
        $subscriberEmail = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        
        // Validate the email address
        if (filter_var($subscriberEmail, FILTER_VALIDATE_EMAIL)) {
            
            // Prepare the email details
            $subject = "New Newsletter Subscription";
            $message = "You have a new newsletter subscription.\n\n";
            $message .= "Subscriber Email: " . $subscriberEmail . "\n";
            $message .= "Subscription Date: " . date("F j, Y, g:i a") . "\n";
            
            // Set the email headers
            $headers = "From: no-reply@john-ogletree.com\r\n";
            $headers .= "Reply-To: no-reply@john-ogletree.com\r\n";
            $headers .= "X-Mailer: PHP/" . phpversion();
            
            // Attempt to send the email
            if (mail($recipientEmail, $subject, $message, $headers)) {
                // Success message (you can redirect or display a message as needed)
                echo "Thank you for subscribing to our newsletter!";
            } else {
                // Failure message
                echo "Oops! Something went wrong. Please try again later.";
            }
            
        } else {
            // Invalid email format
            echo "Please enter a valid email address.";
        }
    } else {
        // Email field not set
        echo "Please provide your email address.";
    }
} else {
    // If the form wasn't submitted via POST, redirect to the subscription form page
    header("Location: /path-to-your-subscription-form.html");
    exit();
}
?>
