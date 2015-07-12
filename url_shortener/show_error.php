<h1>Invalid URL</h1>
<?php
	$url = "http://";
	$url .= $_SERVER['HTTP_HOST'];
	$url .= "/url_short/index.php";
	echo "Go To <a href=$url>Home</a>";
?>
