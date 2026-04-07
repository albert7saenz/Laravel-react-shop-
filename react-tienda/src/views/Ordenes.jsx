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

  console.log(data)
  console.log(error)
  console.log(isLoading)
  return (
    <div>
        <h1 className="text-5xl font-bold ">
            Ordenes
        </h1>

        <p className="text-lg my-10">
        Administra las ordenes desde aqui
        </p>
    </div>
  )
}
