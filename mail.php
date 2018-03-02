<?php
$name = $_POST['uname'];
$phone = $_POST['uphone'];
$city = $_POST['ucity'];


$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$city = htmlspecialchars($city);

$name = urldecode($name);
$phone = urldecode($phone);
$city = urldecode($city);

$name = trim($name);
$phone = trim($phone);
$city = trim($city);

//echo $firstname;
//echo "<br>";
//echo $telephone;
mail("89627631622@mail.ru", "Заявка на возвращение страховки. вернистраховку.рф", "Имя:".$name."\n Телефон: ".$phone."\n Город: ".$city,"From: 89627631622@mail.ru \r\n");

//$post_data = array();  89627631622@mail.ru

//if (isset($_POST['uname'])) { $post_data['name'] = htmlspecialchars($_POST['uname']); } else { $post_data['name'] = ''; }
//if (isset($_POST['uphone'])) { $post_data['phone'] = htmlspecialchars($_POST['uphone']); } else { $post_data['phone'] = ''; }
//$post_data['site'] = 'iphone-express.ru';

//$curl = curl_init();
//curl_setopt($curl, CURLOPT_URL, 'http://portal.dev-platform.ru/Modules/RequestsForm/Listening/Index/5942200c877a5');
//curl_setopt($curl, CURLOPT_POST, 1);
//curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
//$output = curl_exec($curl);
?>