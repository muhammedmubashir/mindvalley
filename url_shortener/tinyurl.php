<?php
require_once("db_manager.php");

class tinyUrl extends db_manager
{
	function __construct()
	{
		
	}

	function generate_random_string($length = 8) 
	{
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $total_char = strlen($characters);
	    $random_str = '';
	    for ($loop = 0; $loop < $length; $loop++) {
	        $random_str .= $characters[rand(0, $total_char - 1)];
	    }
	    return $random_str;
	}

}

$obj = new tinyUrl();
$obj->connect();
$obj->connect();


?>