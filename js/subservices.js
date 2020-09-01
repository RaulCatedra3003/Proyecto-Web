// Change the input title position
var inputs = document.getElementsByClassName('formInput');
for (var i = 0; i< inputs.length; i ++) {
    inputs[i].addEventListener('keyup', function(){
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fixe');
        } else {
            this.nextElementSibling.classList.remove('fixe');
        }
    });
}
const boton = document.getElementById('btn');
const lightBox = document.querySelector('.subServicesLightbox');
const closebtn = document.getElementById('iconclose');

// Open and close the lightbox
function showLightBox(){
    var errors = document.getElementById('error');
    var succes = document.getElementById('succes');
    errors.innerHTML = '';
    succes.innerHTML = '';

    if(lightBox.classList.contains("show")){
        lightBox.classList.remove("show");
    } else {
        lightBox.classList.add("show");
    }
}

function closeLightBox(){
    if(lightBox.classList.contains("show")){
        lightBox.classList.remove("show");
    }
}

boton.addEventListener('click', showLightBox, false);
closebtn.addEventListener('click', closeLightBox, false);

//Validation of the imputs
function formValidation(){
    var unames = document.moreInfoform.names;
    var uemail = document.moreInfoform.emails;
    var uphone = document.moreInfoform.phones;
    var uasunto = document.moreInfoform.asuntos;
    var errors = document.getElementById('error');
    var succes = document.getElementById('succes');
    var errorMesajes = [];
    var succesMesajes = [];

    if(nmsValidation(unames)){
        if(emlsValidation(uemail)){
            if(phnValidation(uphone)){
                if(asntValidation(uasunto)){
                    formClean();
                    succesMesajes.push('Envio de formulario completado');
                    console.log('Envio de formulario');
                }
            }
        }
    }
    errors.innerHTML = errorMesajes.join(', ');
    succes.innerHTML = succesMesajes.join(', ');
    return false;

    function nmsValidation(unames){
        var letters = /^[A-Za-z]+$/;
        if (unames.value.match(letters)){
            console.log('Nombre correcto');
            return true;
        } else {
            console.log('Nombre incorrecto');
            errorMesajes.push('Es necesario un nombre');
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

    function asntValidation(uasunto){
        if(uasunto.value.length >= '20'){
            console.log('Asunto correcto');
            return true;
        } else {
            errorMesajes.push('Al menos 20 caracteres en el campo asunto');
            console.log('Asunto incorrecto');
            return false;
        }
    }

    function formClean(){
        document.getElementById('moreInfoForm').reset();
    }
}





















































/*var names = false;
var emails = false;
var phones = false;
var asuntos = false;
var errors = document.getElementById('error');

document.getElementById('email').addEventListener('input', function() {
    campo = event.target;

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (emailRegex.test(campo.value)) {
        email = true;
    }
        
});

function formSend() {
    var errorMesajes = [];

    console.log('Esperando a los campos rellenos');
    if (names == true && emails == true && phones == true && asuntos == true){
        console.log('Enviando email a la empresa...');
    } 
    if (names == false && emails == false && phones == false && asuntos == false){
        errorMesajes.push('Es necesario un nombre');
        errorMesajes.push('un email');
        errorMesajes.push('un teléfono');
        errorMesajes.push('un asunto');
    } 
    if (names == true && emails == false && phones == false && asuntos == false){
        errorMesajes.push('Es necesario un email');
        errorMesajes.push('un teléfono');
        errorMesajes.push('un asunto');
    } 
    if (names == false && emails == true && phones == false && asuntos == false){
        errorMesajes.push('Es necesario un nombre');
        errorMesajes.push('un teléfono');
        errorMesajes.push('un asunto');
    }
    if (names == false && emails == false && phones == true && asuntos == false){
        errorMesajes.push('Es necesario un nombre');
        errorMesajes.push('un email');
        errorMesajes.push('un asunto');
    } 
    if (names == false && emails == false && phones == false && asuntos == true){
        errorMesajes.push('Es necesario un nombre');
        errorMesajes.push('un email');
        errorMesajes.push('un teléfono');
    } 
    if (names == false && emails == true && phones == true && asuntos == false){
        errorMesajes.push('Es necesario un nombre');
        errorMesajes.push('un asunto');
    } 
    if (names == false && emails == true && phones == false && asuntos == true){
        errorMesajes.push('Es necesario un nombre');
        errorMesajes.push('un teléfono');
    } 
    if (names == false && emails == false && phones == true && asuntos == true){
        errorMesajes.push('Es necesario un nombre');
        errorMesajes.push('un email');
    } 
    if (names == false && emails == true && phones == true && asuntos == true){
        errorMesajes.push('Es necesario un nombre');
    } 
    if (names == true && emails == false && phones == true && asuntos == true){
        errorMesajes.push('Es necesario un email');
    }
    if (names == true && emails == true && phones == false && asuntos == true){
        errorMesajes.push('Es necesario un teléfono');
    }
    if (names == true && emails == true && phones == true && asuntos == false){
        errorMesajes.push('Es necesario un asunto');
    }
    if (names == true && emails == false && phones == false && asuntos == true){
        errorMesajes.push('Es necesario un email');
        errorMesajes.push('un teléfono');
    }
    if (names == true && emails == false && phones == true && asuntos == false){
        errorMesajes.push('Es necesario un email');
        errorMesajes.push('un asunto');
    }
    if (names == true && emails == true && phones == false && asuntos == false){
        errorMesajes.push('Es necesario un teléfono');
        errorMesajes.push('un asunto');
    }

    error.innerHTML = errorMesajes.join(', ');
}


var errorMesajes = [];
errorMesajes.push('Es necesario un email');    
error.innerHTML = errorMesajes.join(', ');
*/
