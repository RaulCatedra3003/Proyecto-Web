//Validation of the imputs
function formValidation(){
    var unames = document.contactForm.names;
    var uphone = document.contactForm.phones;
    var uemail = document.contactForm.mails;
    var udesc = document.contactForm.desc;
    var uasunto = document.contactForm.asunto;
    var errors = document.getElementById('error');
    var succes = document.getElementById('succes');
    var errorMesajes = [];
    var succesMesajes = [];

    if(nmsValidation(unames)){
        if(phnValidation(uphone)){
            if(emlsValidation(uemail)){
                if(asuntoSelect(uasunto)){
                    if(descValidation(udesc)){
                        formClean();
                        succesMesajes.push('Envio de formulario completado');
                        console.log('Envio de formulario');
                    }
                }
            }
        }
    }
    errors.innerHTML = errorMesajes.join(', ');
    succes.innerHTML = succesMesajes.join(', ');
    return false;

    function nmsValidation(unames){
        var letters = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        if (unames.value.match(letters)){
            console.log('Nombre correcto');
            return true;
        } else {
            console.log('Nombre incorrecto');
            errorMesajes.push('Es necesario un nombre');
            return false;
        }
    }

    function phnValidation(uphone){
        var numbers = /^[0-9]+$/;
        if(uphone.value.match(numbers) && uphone.value.length == '9'){
            console.log('Teléfono correcto');
            return true;
        } else {
            console.log('Teléfono incorrecto');
            errorMesajes.push('Es necesario un teléfono');
            return false;
        }
    }

    function emlsValidation(uemail){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(uemail.value.match(mailformat)){
            console.log('Email correcto');
            return true;
        } else {
            console.log('Email incorrecto');
            errorMesajes.push('Es necesario un email');
            return false;
        }
    }

    function asuntoSelect(uasunto){
        if(uasunto.value == "Default"){
            console.log('Asunto no seleccionado');
            errorMesajes.push('Debe seleccionarse una opción');
            return false;
        } else {
            console.log('Asunto seleccionado');
            return true;
        }
    }

    function descValidation(udesc){
        if(udesc.value.length >= '20'){
            console.log('Descripción correcta');
            return true;
        } else {
            console.log('Descripción incorrecta');
            errorMesajes.push('Al menos 20 caracteres en el campo descripción');
            return false;
        }
    }

    function formClean(){
        document.getElementById('contactForm').reset();
    }
}