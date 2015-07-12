<?php
require_once("db_manager.php");

class tinyUrl extends db_manager
{
	public $tiny_url;
	public $long_url;

	function __construct()
	{
		$this->connect();
	}

	function validate_url()
	{
		$pattern = "/^(?:https?:\/\/)?(?:[a-z0-9-]+\.)*((?:[a-z0-9-]+\.)[a-z]+)/";
		return preg_match($pattern,$this->long_url);
	}

	function already_exist() 
	{
		$where = array("actual_url"=>$this->long_url);
		$result = $this->get("urls","*",$where);
		if(count($result))
		{
			$this->tiny_url = $result['shortcode'];
			return true;
		}

		return false;
	}

	function create_tiny_url()
	{
		return true;
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

if(count($_POST))
{
	$input_url = htmlentities($_POST['website_url']);

	$tiny_url = new tinyUrl();
	$tiny_url->long_url = $input_url;

	if($tiny_url->validate_url())
	{
		if($tiny_url->already_exist())
		{
			return $tiny_url->tiny_url;
		}
		else
		{
			$tiny_url->create_tiny_url();

		}
	}




}
/*
$obj = new tinyUrl();
$obj->connect();
$obj->connect();
*/


?>