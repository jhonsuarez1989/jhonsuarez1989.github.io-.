function validarFormulario(){
    $('.alerta').remove();

    let nombre=$('#nombre').val(),
        correo=$('#correo').val(),
        asunto=$('#asunto').val(),
        mensaje=$('#mensaje').val();

    // Ingresar dato en el campo, si no arrojar error
    if(nombre=="" || nombre==null){
        cambiarColor("nombre");
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        let expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(nombre)){
            cambiarColor("nombre");
            mostraAlerta("Ingrese un nombre valido");
            return false;
        }
    }

    // Que el correo sea valido
    if(correo=="" || correo==null){

        cambiarColor("correo");
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        let expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(correo)){
            cambiarColor("correo");
            mostraAlerta("Por favor ingrese un correo válido");
            return false;
        }
    }

    // Que asunto no este vacio
    if(asunto=="" || asunto==null){

        cambiarColor("asunto");
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(asunto)){
            cambiarColor("asunto");
            mostraAlerta("No se permiten caracteres especiales");
            return false;
        }
    }

     // Que mensaje no esté vacio
     if(mensaje=="" || mensaje==null){

        cambiarColor("mensaje");
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(mensaje)){
            cambiarColor("mensaje");
            mostraAlerta("No se permiten caracteres especiales");
            return false;
        }
    }
    $('form').submit();
    return true; 
} 

$('input').focus(function(){
    $('.alerta').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('asunto');
});

$('textarea').focus(function(){
    $('.alerta').remove();
    colorDefault('mensaje');
});

// borde por defecto
function colorDefault(dato){
    $('#' + dato).css({
        border: "1px solid #385FF4"
    });
}

// brode de alerta cuando no llenan los campos
function cambiarColor(dato){
    $('#' + dato).css({
        border: "3px solid #c8232c"
    });
}

// f-alerta

function mostraAlerta(texto){
    $('#nombre').before('<div class="alerta">Error: '+ texto +'</div>');
}