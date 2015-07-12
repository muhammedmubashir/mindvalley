<?php

// echo "<pre>";
// print_r($_GET);
// echo "</pre>";

$code = htmlentities($_GET['code']);
if($code != "" && strlen($code) == 6)
{
	require_once("tinyurl.php");
	$tiny_url = new tinyUrl();
	$tiny_url->tiny_url = $code;
	
	$actual_url = $tiny_url->get_actual_url();
	if($actual_url !== false)
	{
		header("Location: $actual_url");
	}
	else
	{
		header("Location: show_error.php");
	}
}
	
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>URL Shortener</title>
<link rel="stylesheet" type="text/css" href="css/view.css" media="all">
<script type="text/javascript" src="js/view.js"></script>

</head>
<body id="main_body" >
	
	<img id="top" src="images/top.png" alt="">
	<div id="form_container">
	
		<h1><a>URL Shortener</a></h1>
		<!-- Start Form -->
		<form action="tinyurl.php" class="appnitro"  method="post">
			<div class="form_description">
				<h2>URL Shortener</h2>
				<p>Convert long URL(s) into Short</p>
			</div>						
			<ul >
				<li id="li_1" >
					<label class="description" for="element_1">Web Site </label>
					<div>
						<input id="website_url" name="website_url" class="element text medium" type="text" maxlength="255" value="http://"/> 
					</div> 
				</li>
				<li class="buttons">
					<input id="saveForm" class="button_text" type="submit" name="submit" value="Submit" />
				</li>
			</ul>
		</form>	
		<!-- end form -->
	</div>
	<img id="bottom" src="images/bottom.png" alt="">
	</body>
</html>