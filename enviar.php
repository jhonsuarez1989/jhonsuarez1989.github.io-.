<?php

function validar_campo($campo){
    $campo = trim($campo);
    $campo = stripcslashes($campo);
    $campo = htmlspecialchars($campo);

    return $campo;
}
header('Content-Type: application/json');

if (isset($_POST["nombre"]) && !empty($_POST["nombre"]) &&
    isset($_POST["correo"]) && !empty($_POST["correo"]) &&
    isset($_POST["mensaje"]) && !empty($_POST["mensaje"])) {


    $destinoMail = "jhonsuarezm14@gmail.com";
    $nombre = validar_campo($_POST["nombre"]);
    if (isset($_POST["telefono"])) {
        $telefono = validar_campo($_POST["telefono"]);
    }
    $correo = validar_campo($_POST["correo"]);
    $mensaje = validar_campo($_POST["mensaje"]);

    $contenido = "Nombre: " . $nombre . "\n Teléfono" . $telefono;
    $contenido .= "\n Correo: " . $correo;
    $contenido .= "\n Mensaje: " . $mensaje;

 //   mail($destinoMail, "Info del Cliente" . $nombre, $contenido);

    return print(json_encode('ok'));

}

return print(json_encode('error de envio'));