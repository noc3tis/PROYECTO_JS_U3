const nombreInput = document.getElementById("NombreHuesped");
const telefonoInput = document.getElementById("Telefono");
const emailImput = document.getElementById("Correo");
const contraseñaInput = document.getElementById("Contraseña");
const form = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    let warnings = "";
    let entrar = false;
    let regexNombre = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexTelefono = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    parrafo.innerHTML = "";
    if (nombreInput.value.length < 2) {
        warnings += 'El nombre no es valido <br>'
        entrar = true;
    }
    console.log(regexNombre.test(nombreInput.value))
    if (!regexNombre.test(nombreInput.value)) {
        warnings += 'El nombre no cumple con la expresion <br>'
        entrar = true;
    }
    if (telefonoInput.value.length < 9) {
        warnings += 'El telefono no es valido <br>'
        entrar = true;
    }
    console.log(regexTelefono.test(telefonoInput.value))
    if (!regexTelefono.test(telefonoInput.value)) {
        warnings += 'El telefono no cumple con la expresion <br>'
        entrar = true;
    }
    console.log(regexEmail.test(emailImput.value))
    if (!regexEmail.test(emailImput.value)) {
        warnings += 'El email no es valido <br>'
        entrar = true;
    }
    if (contraseñaInput.value.length < 2) {
        warnings += 'La contraseña es muy corta <br>'
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    }
});