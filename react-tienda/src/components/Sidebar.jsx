import useTienda from "../hooks/useTienda"
import Categoria from "./Categoria"
import { useAuth } from "../hooks/useAuth"

export default function Sidebar() {

    
    const { categorias } = useTienda()
    const { logout, user } = useAuth({middleware:'auth'})


    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img 
                    src="img/logo.svg" 
                    alt="imagen-logotipo" 
                />
            </div>
            <p className="my-10 text-xl text-center font-bold bg-blue-500 border rounded-lg  hover:bg-yellow-500  cursor-pointer">Hola: {user?.name}</p>
            <div className="mt-10">
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria ={categoria}
                    />
                ))}
            </div>
            <div className="my-5 px-5">
                <button 
                    type="button"
                    className="bg-red-500 w-full p-3 text-white font-bold"
                    onClick={logout}
                >
                    Cancelar orden
                </button>
            </div>
            
        </aside>
    )
}
