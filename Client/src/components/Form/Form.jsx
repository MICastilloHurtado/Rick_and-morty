import { useState } from "react"
import validation from "../validation/validation"
import style from './form.module.css'

const Form = ({login}) => {
    
    const [errors, setErrors] = useState({})
    const [userData, getUserData] = useState({
        email: "",
        password: ""
    })

const handleChange = (event) => {
    getUserData({
        ...userData,
        [event.target.name]: event.target.value
    })

    setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value
    }))
}

const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
}

    return(
        <div>
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <label htmlFor="email"  >Email:</label>
                    <input type="email" name="email" onChange={handleChange} />
                    {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                    <br/>
                    <br/>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handleChange}/>
                    {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                    <br/>
                    <br/>

                    <button className={style.boton}>Log In</button>
                </form>        
            </div>
            <div >
            <p>© 2023 Marcos Isaac Castillo Hurtado. Todos los derechos reservados.
                 El contenido y el código fuente de este proyecto de programación de 
                 Rick y Morty están protegidos por las leyes de derechos de autor y 
                 propiedad intelectual. Este proyecto es solo para fines educativos
                  y no está afiliado</p>       
        </div>
        </div>
    )
}

export default Form