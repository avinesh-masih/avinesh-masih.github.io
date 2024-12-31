<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Email configuration
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New message from $name";
    $headers = "From: $email" . "\r\n" . 
               "Reply-To: $email" . "\r\n" . 
               "X-Mailer: PHP/" . phpversion();

    // Email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n$message\n";

    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Thank you for your message. It has been sent.";
    } else {
        echo "Sorry, there was an issue sending your message. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
