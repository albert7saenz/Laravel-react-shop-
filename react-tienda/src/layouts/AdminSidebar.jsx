import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function AdminSidebar() {

    const { logout } = useAuth({middleware:'auth'}) 
  return (
    <aside className="md:w-72 h-screen">
        <div className="p-4">
            <img
                src="/img/logo.svg"
                alt="imagen logotipo"
                className="w-40"
            />
        </div>

        <nav className="flex flex-col p-4">
            <Link to="/admin" className="hover:bg-yellow-500 font-bold rounded-sm py-2 px-1"> Ordenes </Link>
            <Link to="/admin/productos" className="hover:bg-yellow-500 font-bold rounded-sm py-2 px-1"> Productos </Link>
        </nav>

        <div className="my-5 px-5">
            <button 
                type="button"
                className="bg-red-500 hover:bg-red-600 px-2 py-1 text-white font-bold rounded-sm"
                onClick={logout}
            >
                Cerrar Sesion
            </button>
        </div>
    </aside>
  )
}
