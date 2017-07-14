<!doctype html>
<html class="no-js" lang="es" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CONTADOR</title>
    </head>
    <body>
		<script src="js/jquery.min.js"></script>
        <script>
            window.onload = function() {
                
                var DEBUG = false;
                
                if (!DEBUG)
                {
                    $.ajax({
                        url:'counter.php',
                        success: function (respones) {
                        },
                        complete: function (response) {
                            console.log("OK");
                        },
                        error: function () {
                            console.log("KO");
                        }
                    });
                }
            }
        </script>
        
    </body>
</html>
