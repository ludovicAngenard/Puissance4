<?php
$mysqli = new mysqli("localhost", "root", "root", "puissance_4");

//check connection
if ($mysqli -> connection_aborted) {
    echo "failes to connect to MySQL : " . $mysqli -> connection_aborted;
    exit();
}
?>

<!DOCTYPE html>
<html lang="FR-fr">
    <head>
        <meta charset="UTF-8" />
        <title>Puissance 4</title>
    </head>
    <body>
        <a href="/login.php">login</a> 
        <a href="/inscription.php">inscrition</a> 
    </body>
</html>