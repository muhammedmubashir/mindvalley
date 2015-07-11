<?php
define("HOST","localhost");
define("USER","root");
define("PASSWORD","");
define("DBNAME","url_shortener");
?>
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript">
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        	console.log('left');
        break;

        case 38: // up
        console.log('up');
        break;

        case 39: // right
        console.log('right');
        break;

        case 40: // down
        console.log('down');
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
</script>