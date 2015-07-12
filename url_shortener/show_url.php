<h1>URL Shortener</h1>
<?php
if(isset($_GET['tiny_url']) && $_GET['tiny_url'] != "" && strlen($_GET['tiny_url']) == 6)
{
	//echo "im here";
	$new_url = "http://";
	$new_url .= $_SERVER['HTTP_HOST'];
	$new_url .= "/url_short/";
	$new_url .= htmlentities($_GET['tiny_url']);
	echo "<a href=$new_url>$new_url</a>";
}

else
{
	header("Location: index.html");
	exit;
}
?>