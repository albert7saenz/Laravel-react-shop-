import useSWR from "swr"
import clienteAxios from "../config/axios"
import { formateraDinero} from '../helpers'
import useTienda from "../hooks/useTienda"


export default function () {

  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/pedidos', {
    headers:{
      Authorization: `Bearer ${token}`
    }
  })

  const { data, error, isLoading} = useSWR('/api/pedidos', fetcher)

  const { handleClickComprobarPedido } = useTienda()
 if(isLoading) return 'cargando....'

  return (
    <div>
        <h1 className="text-5xl font-bold ">
            Ordenes
        </h1>

        <p className="text-lg my-10">
        Administra las ordenes desde aqui
        </p>

        <div className="grid grid-cols-2">
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

              <p className="text-lg font-bold text-slate-500">
                Cliente: {''}
                <span className="font-normal">{pedido.user.name}</span>
              </p>

               <p className="text-lg font-bold text-amber-600">
                Total: {''}
                <span className="font-normal text-slate-500">{formateraDinero(pedido.total)}</span>
              </p>

              <button
                type="button" 
                className={'bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer '}
                onClick={()=> handleClickComprobarPedido(pedido.id)}  
              >
                  Completar
              
                </button>
            </div>  
          ))}
        </div>
    </div>
  )
}
