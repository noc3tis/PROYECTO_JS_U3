<?php


$dbhost = "sql204.infinityfree.com"; 
$dbname = "if0_36504732_reservas";
$dbuser = "if0_36504732";
$dbpass = "sMvX37vShkEwvBl";

    $conexion=mysqli_connect
    ($dbhost,$dbuser,$dbpass,$dbname, "3306") or 
    die ("Problemas con la conexion");
    
    $id=$_POST["id"];
    $nombre=$_POST["nombre"];
    $capacidad=$_POST["capacidad"];
    
    if (($id!="")&&($nombre!="")){
        $sql = "UPDATE tipos SET nombre_tipo='$nombre', capacidad_maxima='$capacidad' WHERE
        id_tipo=$id";

        $ejecutar = mysqli_query($conexion, $sql);

        if($ejecutar===TRUE){
        echo '
            <script>
            alert("Registro modificado");
            window.location = "tipos.php";
            </script>
        ';
        }else{
        echo '
            <script>
                alert("No se pudo modoficar el registro");
                window.location = "tipos.php";
            </script>
            ';
        }

    }

    mysqli_close($conexion);

?>