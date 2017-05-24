<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "alimensonriesw4";

$mysqli = new mysqli('localhost', 'root', 'root', 'alimensonriesw4');

//Chequeo rutinario.
if ($mysqli->connect_error) {
    die('Error de Conexión (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}

if (mysqli_connect_error()) {
    die('Error de Conexión (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
}

//Todo ha ido bien.
echo 'Exito en el host: ' . $mysqli->host_info . '<br/><br/>';




//Accediendo a datos.
$nombre_user = "'Pepito'";
$result = $mysqli->query('SELECT * FROM memorium WHERE nombre = '.$nombre_user.'');

echo 'Usuario: '.$nombre_user.'<br/>';
while ($fila = $result->fetch_assoc())
{
	echo 'Progreso: '.$fila["progreso"].'<br/>';
	echo 'Gano500 '.$fila["gano500"].'<br/>';
	echo 'Gano2x1 '.$fila["gano2x1"].'<br/>';
}

mysqli_close($mysqli);
?>