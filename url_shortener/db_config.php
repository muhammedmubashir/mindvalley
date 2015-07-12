<?php
if($_SERVER['HTTP_HOST'] == "localhost")
{
    define("HOST","localhost");
    define("USER","root");
    define("PASSWORD","123456");
    define("DBNAME","url_shortener");
}

else
{
    define("HOST","mysql1212.hostexcellence.com");
    define("USER","A949118_urlshort");
    define("PASSWORD","Kingston1!");
    define("DBNAME","A949118_url_shortener");

}
?>