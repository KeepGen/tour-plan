<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if(!empty($_POST['e-mail'])){

    // Переменные, которые отправляет пользователь
    $name = $_POST['name'];
    $phone = $_POST['phone'];   
    $email = $_POST['e-mail'];
    $message = $_POST['message'];

    // Формирование самого письма
    $title = "New message from Best Tour Plan";
    $body = "
    <h4>You have new message from Best Tour Plan website</h4>
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
    header('location: thankyou.html');
    /* echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]); */

} else if(!empty($_POST['email'])){
    // Переменные, которые отправляет пользователь

    $email = $_POST['email'];

    // Формирование самого письма
    $title = "Horay! You have new Subscriber!";
    $body = "<h4>Add this e-mail to subscription list</h4><b>Email:</b> $email<br>";

    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $mail->isSMTP();   
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth   = true;
        //$mail->SMTPDebug = 2;
        //$mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

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
        throw $e;   
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

    // Отображение результата
    header('location: mails.html');
    /* echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]); */
} else {
    throw new Exception("Bad Request");    
}
