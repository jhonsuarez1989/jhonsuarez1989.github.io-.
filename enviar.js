$(document).ready(function(){
    
    $(".formulario-contacto").bind("submit", function(){

        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            success:function(respuesta){
                if(respuesta == "ok"){
                    $("#alerta").removeClass("hide").removeClass("alert-danger").removeClass("alert-success").addClass("alert-success");
                    $(".respuesta").html("Enviado!");
                    $(".mensaje-alerta").html("Mensaje enviado correctamente."); 
                } else {
                    $("#alerta").removeClass("hide").removeClass("alert-danger").removeClass("alert-success").addClass("alert-danger");
                    $(".respuesta").html("Error!");
                    $(".mensaje-alerta").html("Mensaje no enviado, intenta nuevamente.");
                }
            },
            error:function(){
                $("#alerta").removeClass("hide").removeClass("alert-danger").removeClass("alert-success").addClass("alert-danger");
                $(".respuesta").html("Error!");
                $(".mensaje-alerta").html("Mensaje no enviado, intenta nuevamente.");
            }
        });

        return false;
    });

});