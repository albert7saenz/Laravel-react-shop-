import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios'
import Alerta from '../components/Alerta';

export default function Registro() {
    
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [ errores, setErrores] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value, 
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        
        console.log(datos)
        try {
            const resp = await clienteAxios.post('/api/registro', datos)
            console.log(resp)
        } catch (error) {
            setErrores(Object.values(error.response.data.errors))
        }
    }

    return (
        <>
            <h1 className="text-4xl font-black">Crea tu cuenta</h1>
            <p>Crea tu cuenta llenando el formulario</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form 
                    onSubmit={handleSubmit}
                    noValidate
                >

                    {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null }

                    <div className="mb-4">
                        <label htmlFor="name" className="text-slate-800">
                            Nombre:
                        </label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            className="mt-5 w-full p-1 bg-gray-100"
                            ref={nameRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-slate-800">
                            Email:
                        </label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            className="mt-5 w-full p-1 bg-gray-100"
                            ref={emailRef}
                        />
                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="password" className="text-slate-800">
                            Password:
                        </label>
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            className="mt-5 w-full p-1 bg-gray-100"
                            ref={passwordRef}
                        />
                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="password_confirmation" className="text-slate-800">
                            Repetir Password:
                        </label>
                        <input 
                            type="password" 
                            id="password_confirmation"
                            name="password_confirmation"
                            placeholder="Repetir Password"
                            className="mt-5 w-full p-1 bg-gray-100"
                            ref={passwordConfirmationRef}
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Crear Cuenta"
                        className="bg-blue-700 hover:bg-blue-600 text-white p-3 w-full mt-5 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>

            <nav className="mt-5">
            <Link to="/auth/Login">
                Ya tienes cuenta? Inicia sesion
            </Link>
            </nav>
        </>
    
  )
}
