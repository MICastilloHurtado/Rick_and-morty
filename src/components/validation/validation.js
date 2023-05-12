const validation = (userData) => {
    const errors = {};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
        errors.email = 'El imail ingresado no es valido'
    }
    if(!userData.email){
        errors.email = 'Ingrese su email'
    }
    if(userData.length > 35){
        errors.email = 'El campo debe ser menor a 35 caracteres'
    }
    if(!/.*[0-9].*/.test(userData.password)){
        errors.password = 'La contraseña debe tener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe tener al menos 6 caracteres y no mas de 10 caracteres'
    }

    return errors
}

export default validation