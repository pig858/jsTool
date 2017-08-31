<?php
require('public_include.php');
session_start();
if (is_ajax()){
	$captcha = $_POST['captcha'];//驗證碼

	if($_SESSION['serial']==$captcha){//正確
		echo 1;
	}else{
		echo 0;
	}
	// echo $_SESSION['serial'];
	// echo $captcha;
}

//Function to check if the request is an AJAX request
function is_ajax(){
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}
?>
