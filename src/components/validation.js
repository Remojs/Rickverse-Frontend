const validate = (form) => {
    let errors = {};

    if (!/\S+@\S+.\S+/.test(form.email)) { 
        errors.email = "El email no es valido";
    }

    if (!form.email) { //Valida stado de los campos
        errors.email = "El email no puede estar vacio";
    }

    if (form.email.length > 35) {
        errors.email = "El email no puede tener mas de 35 caracteres"
    }

    if (form.pass.length <= 5 || form.pass.length >= 11) {
        errors.pass = "La contraseña debe tener entre 6 y 10 caracteres";
    }

    if(!/[0-9]/.test(form.pass)){
        errors.pass = "La contraseña necesita un número"
    }

    return errors; //Cambia stado de los errores al terminar todas las validaciones
};

export default validate;