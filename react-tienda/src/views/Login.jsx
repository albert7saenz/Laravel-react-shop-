import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
    <h1 className="font-black text-4xl item-center ">Iniciar Sesion</h1>
    <p>Para crear un pedido debes iniciar sesion</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
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
