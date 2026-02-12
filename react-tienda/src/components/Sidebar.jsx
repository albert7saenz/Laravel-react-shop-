import useTienda from "../hooks/useTienda"
import Categoria from "./Categoria"

export default function Sidebar() {

    const { categorias } = useTienda()
  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img 
                src="img/logo.svg" 
                alt="imagen-logotipo" 
            />
        </div>

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
            >
                Cancelar orden
            </button>
        </div>
        
    </aside>
  )
}
