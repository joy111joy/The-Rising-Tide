<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if (isset($_POST['submit'])) {
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions

$mail->isSMTP();                                          // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';      // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                                   // Enable SMTP authentication
$mail->Username = 'tide.order@gmail.com';
$mail->Password = 'olnhvkgrlrplalzf';                     // SMTP password
$mail->SMTPSecure = 'ssl';                                // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                        // TCP port to connect to

$mail->setFrom('tide.order@gmail.com');

$mail->addAddress('mitchel_joy@hotmail.com');                       // Add a recipient

$mail->isHTML(true);                                      // Set email format to HTML

$mail->Subject = 'Order Confirmation';

$mail->Body    = $_POST['Size'] . ' ' . $_POST['Flavour'];

try {
    $mail->SMTPDebug = 2;  // Enable verbose debug output
    $mail->send();
    header("Location: CakeOrder.html");
    exit; // Move the exit statement here
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
}

?>