<h1>URL Shortener</h1>
<?php
if(isset($_GET['tiny_url']) && $_GET['tiny_url'] != "" && strlen($_GET['tiny_url']) == 6)
{
	//echo "im here";
	$base_url = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on") ? "https" : "http");
	$base_url .= "://".$_SERVER['HTTP_HOST'];
	$base_url .= str_replace(basename($_SERVER['SCRIPT_NAME']),"",$_SERVER['SCRIPT_NAME']);
	$base_url .= htmlentities($_GET['tiny_url']);
	echo "<a href=$base_url>$base_url</a>";
}

else
{
	header("Location: index.php");
	exit;
}
?>