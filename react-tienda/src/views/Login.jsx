import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';

export default function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();

    const [ errores, setErrores] = useState([]);

    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    })

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        
      login(datos,setErrores)
    }


    return (
    <>
    <h1 className="font-black text-4xl item-center ">Iniciar Sesion</h1>
    <p>Para crear un pedido debes iniciar sesion</p>
        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action=""
                onSubmit={handleSubmit}
                noValidate
            >

            {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null }

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

                <input 
                    type="submit" 
                    value="Iniciar sesion"
                    className="bg-blue-700 hover:bg-blue-600 text-white p-3 w-full mt-5 uppercase font-bold cursor-pointer"
                />
            </form>
        </div>

        <nav className="mt-5">
            <Link to="/auth/registro">No tienes cuenta? Registrate</Link>
        </nav>
    </>
    )
    }
