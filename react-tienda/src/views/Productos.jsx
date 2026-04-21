import clienteAxios from '../config/axios'
import useSWR from 'swr'
import Producto from '../components/Producto'

export default function () {

  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/productos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(datos => datos.data)

  const { data, error, isLoading } = useSWR('/api/productos', fetcher, { refreshInterval:10000 })

  if(isLoading) return "cargando..."

  console.log(data)

  return (
    <div>
        <h1 className="text-5xl font-bold ">
            productos
        </h1>

         <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {data.data.map(producto =>(
                  <Producto
                    key={producto.imagen}
                    producto={producto}
                    btnDisponible={true}
                  />
              ))}
        
            </div>
    </div>
  )
}
