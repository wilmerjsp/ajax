<?php

$año = $_POST["edad"];

$edad = date("Y") - $año;

echo    '<div class="alert alert-primary" role="alert">'.
        'Hola '.$_POST["nombre"].', Tienes '.$edad.' Años.
        </div>';

?>