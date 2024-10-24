<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "john.ogletree@john-ogletree.com";
        $subject = "New Newsletter Subscription";
        $message = "You have a new subscriber: " . $email;
        $headers = "From: noreply@john-ogletree.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "Thank you for subscribing!";
        } else {
            echo "There was an issue with your subscription. Please try again.";
        }
    } else {
        echo "Please enter a valid email address.";
    }
} else {
    echo "Invalid request method.";
}
?>
