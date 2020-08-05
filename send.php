<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$email2 = $_POST['e-mail'];
$message = $_POST['message'];

// Формирование самого письма
$title = "New message from Best Tour Plan";
$body = "
<h2>New message</h2>
<b>Name:</b> $name<br>
<b>Phone:</b> $phone<br><br>
<b>Email:</b> $email<br><br>
<b>Message:</b><br>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'webdev.actions@gmail.com'; // Логин на почте
    $mail->Password   = 'Gma#Lia#23'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('webdev.actions@gmail.com', 'Web Developer'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('webdev.actions@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
/* header('location: thankyou.html'); */
/* echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]); */


if (strcmp($email2, "e-mail"))
{
header('location: mails.html');
}



if (strcmp($name, "name") && (strcmp($phone, "phone") && (strcmp($email, "email") && strcmp($message, "message") )
{
header('location: thankyou.html');
}


$query

if ( $query($result) >= 1 ) {
    // the page you want
} else {
    // redirect user to another page
    header( "Location: signup.php" ); die;
}

?>