import useSWR from "swr"
import clienteAxios from "../config/axios"


export default function () {

  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/pedidos', {
    headers:{
      Authorization: `Bearer ${token}`
    }
  })

  const { data, error, isLoading} = useSWR('/api/pedidos', fetcher)

  
 if(isLoading) return 'cargando....'

  return (
    <div>
        <h1 className="text-5xl font-bold ">
            Ordenes
        </h1>

        <p className="text-lg my-10">
        Administra las ordenes desde aqui
        </p>

        <div>
          {data.data.data.map(pedido => (

            <div key={pedido.id} className="p-5 bg-white shadow space-y-2 rounded">
              <h2>Pedido: {pedido.id}</h2>
              {pedido.productos.map(producto => (
                <div key={producto.id}
                className="bg-gray-200 last-of type:border-none py-4 rounded">
                  <p className="text-smal">ID: {producto.id}</p>
                  <p>{producto.nombre}</p>
                  <p>
                    Cantidad: {''}
                    <span className="font-bold">{producto.pivot.cantidad}</span>
                  </p>
                </div>
              ))}

            </div>  
          ))}
        </div>
    </div>
  )
}
