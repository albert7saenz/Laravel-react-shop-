import { productos as data, productos } from "../data/productos"
import Producto from "../components/Producto"
import useTienda from "../hooks/useTienda"

export default function Inicio() {

  const { categoriaActual } = useTienda()
  
  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
    <h1 className="text-5xl font-bold ">{categoriaActual.nombre}</h1>
    <p className="text-lg my-10">
      Elige y personaliza tu pedido a continuacion.
    </p>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {productos.map(producto =>(
          <Producto
            key={producto.imagen}
            producto={producto}
          />
      ))}

    </div>
      
    </>
  )
}
