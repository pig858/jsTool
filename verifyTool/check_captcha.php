<?php
require('public_include.php');
session_start();
if (is_ajax()){
	$captcha = $_POST['captcha'];

	if($_SESSION['serial']==$captcha){
		echo 1;
	}else{
		echo 0;
	}
	
}

//Function to check if the request is an AJAX request
function is_ajax(){
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}
?>
