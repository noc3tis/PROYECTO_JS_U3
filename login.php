<?php
     
    session_start();

    $dbhost = "sql204.infinityfree.com"; 
    $dbname = "if0_36504732_reservas";
    $dbuser = "if0_36504732";
    $dbpass = "sMvX37vShkEwvBl";

    $conexion=mysqli_connect
    ($dbhost,$dbuser,$dbpass,$dbname, "3306") or 
    die ("Problemas con la conexion");

    $correo = $_POST['Correo'];
    $contraseña = $_POST['Contraseña'];
    $contraseña = hash('sha512',$contraseña);

    $validar_login= mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo ='$correo'
    AND contraseña ='$contraseña'");

    if(mysqli_num_rows($validar_login) > 0){
        $_SESSION['usuario'] = $correo;
        header("location:hotel.php");
        exit;
    }else{
        echo '
            <script>
                alert("verificar los datos o registrarse");
                window.location = "Index.php";
            </script>
        ';exit;
    }

?>