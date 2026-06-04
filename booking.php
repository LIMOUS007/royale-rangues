<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $checkin = $_POST['checkin'];
    $checkout = $_POST['checkout'];
    $guests = $_POST['guests'];
    $requests = $_POST['requests'];

    // Prepare the data string to be saved
    $bookingData = "Name: $name, Check-in: $checkin, Check-out: $checkout, Guests: $guests, Special Requests: $requests\n";

    // Save the data to a text file
    $file = fopen("bookings.txt", "a"); // Open the file in append mode
    fwrite($file, $bookingData); // Write the booking data to the file
    fclose($file); // Close the file

    // Redirect to the thank you page
    header("Location: thankyou.html");
    exit();
}
?>
