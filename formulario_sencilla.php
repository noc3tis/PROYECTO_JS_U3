<?php

    session_start();

    if(!isset($_SESSION['usuario'])){
        echo'
            <script>
                alert("Necesitas iniciar sesion");
                window.location = "Index.php";
            </script>
        ';
        session_destroy();
        die();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Habitacion Sencilla</title>
    <link rel="preload" href="css/Normalize.css" as="style">
    <link rel="stylesheet" href="css/Normalize.css">
    <link rel="preload" href="css/styles1.css" as="style">
    <link href="css/styles1.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Krub:wght@400;700&display=swao"
    rel="stylesheet">
    
</head>
<body>
    <section class="formulario">
        <form id="form1" name="form1" method="post" action="reservacion_sencilla.php">
                <h2>Habitación sencilla</h2>
                <a href="">Número de huespedes</a><select class="controls" name="NumHuespedes" id="NumHuespedes">
                    <option>1</option>
                </select> <br>
                <a>Fecha de llegada</a><input class="controls"  type="date" name="llegada" id="llegada" placeholder="Fecha de llegada">
                <a>Fecha de salida</a><input class="controls"  type="date" name="salida" id="salida" placeholder="Fecha de salida">
                
                <input class="botons" type="submit" value="Reservar" name="insertar" />
                
                <center><a href="https://www.paypal.com/ncp/payment/MNPY6GQJE3YC8">PAGAR CON PAYPAL</a></center>


        </form>    
    </section>    
</body>
</html>