<?php
// newsletter-form.php

// Define the email address where you want to receive the submissions
$recipient = "jo783750@gmail.com"; // <-- Replace with your email address

// Define the subject of the email
$subject = "New Newsletter Subscription";

// Check if the form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the email field is set and not empty
    if (isset($_POST['email']) && !empty($_POST['email'])) {
        // Sanitize the email input to prevent injection attacks
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

        // Validate the email format
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Prepare the email headers
            $headers = "From: no-reply@john-ogletree.com\r\n"; // Replace with a valid sender email
            $headers .= "Reply-To: no-reply@yourdomain.com\r\n"; // Optional
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

            // Prepare the email message
            $message = "You have a new newsletter subscription:\n\n";
            $message .= "Email: " . $email . "\n";
            $message .= "Date: " . date("F j, Y, g:i a") . "\n";

            // Send the email
            $mailSent = mail($recipient, $subject, $message, $headers);

            if ($mailSent) {
                // Optionally, redirect to a thank you page or display a success message
                // For example:
                // header("Location: /thank-you.html");
                echo "Thank you for subscribing!";
            } else {
                // Handle the error if the mail was not sent
                echo "Sorry, there was an error sending your subscription. Please try again later.";
            }
        } else {
            // Invalid email format
            echo "Please enter a valid email address.";
        }
    } else {
        // Email field is empty
        echo "Please enter your email address.";
    }
} else {
    // If the form was not submitted via POST, deny access
    echo "Invalid request method.";
}
?>
