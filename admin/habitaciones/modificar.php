<?php


    session_start();

    if(!isset($_SESSION['usuario'])){
        echo'
            <script>
                alert("Necesitas iniciar sesion");
                window.location = "index.php";
            </script>
        ';
        session_destroy();
        die();
    }


    $dbhost = "sql204.infinityfree.com"; 
    $dbname = "if0_36504732_reservas";
    $dbuser = "if0_36504732";
    $dbpass = "sMvX37vShkEwvBl";

$conexion=mysqli_connect
  ($dbhost,$dbuser,$dbpass,$dbname, "3306") or 
  die ("Problemas con la conexion");

  $idhabitacion=$_POST["idhabitacion"];

  if (($idhabitacion!="0")){

    $sql = "SELECT * FROM `habitaciones` WHERE id_habitacion = $idhabitacion";

    $ejecutar = mysqli_query($conexion, $sql);

    if(mysqli_num_rows($ejecutar)> 0){
        $fila= mysqli_fetch_object($ejecutar);
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Registro a modificar</title>
            <a>Modificar habitacion</a><br><br>

            <form id="form1" name="form1" method="post" action="guardar.php">
                <form action="formulario">
                    <section class="formulario">
                        <a>Registrar habitacion</a><br><br>

                        <input type="hidden" name="idhabitacion" value="<?php echo $fila->id_habitacion?>">
                        <input class="controls" type="text" name="idtipo" id="idtipo" placeholder="id tipo" value="<?php echo $fila->id_tipo?>">

                        <input type="submit" value="Modificar" name="guardar" /><br><br>
                    </section>
                </section>
            </form>   

        </head>
        <body>

        </body>
        </html>
        <?php }
        else{
            echo '
            <script>
                alert("El registro no existe");
                window.location = "habitaciones.php";
            </script>
        ';exit;
        }}else{
        echo '
            <script>
                alert("verificar los datos");
                window.location = "habitaciones.php";
            </script>
        ';exit;
    }

    mysqli_close($conexion);
?>