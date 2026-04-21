import { formateraDinero } from "../helpers"
import useTienda from "../hooks/useTienda"


export default function Producto({ producto, btnAgregar = false, btnDisponible = false }) {

    const { handleClickModal, handleSetProducto, handleClickProductoAgotado } = useTienda();
    const { nombre, imagen, precio} = producto


  return (
    <div className="border p-3 shadow bg-white">
        <img 
            className="w-full"
            src={`/img/${imagen}.jpg`} 
            alt={`imagen ${nombre}`} 
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <p className="mt-5 font-black text-3xl text-amber-500">{formateraDinero(precio)}</p>

            {btnAgregar && (
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                    onClick={() => { 
                        handleClickModal();
                        handleSetProducto(producto);
                    }}
                >
                    Agregar        
                </button>
            )}
           

             {btnDisponible && (
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                    onClick={() => {handleClickProductoAgotado(producto.id)}}
                >
                    Producto agotado        
                </button>
                
            )}
        </div>
    </div>
  )
}
