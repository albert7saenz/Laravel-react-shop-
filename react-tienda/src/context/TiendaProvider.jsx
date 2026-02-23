import { createContext, use, useState } from "react"
import { toast } from 'react-toastify'
import { categorias as categoriasDB} from "../data/categorias"

const TiendaContext = createContext();

const TiendaProvider = ({ children }) => {
    
    const [categorias, setCategoria] = useState(categoriasDB);
    const [categoriaActual, setCategorialActual] = useState(categorias[0])
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])

    //las funciones que manejan eventos se inician con handle por conveccion de la libreria
    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategorialActual(categoria)
    }

    const handleClickModal = () => setModal(!modal)

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
        

        if(pedido.some( pedidoState => pedidoState.id === producto.id)){
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState )
            setPedido(pedidoActualizado)
            toast.success('Guardado correctamente')

        }else{
            setPedido([...pedido,producto])
            toast.success('Agregado al pedido')
        }
    }

    return (
        <TiendaContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido

            }}
        >
        {children}   
        </TiendaContext.Provider>
    )
}

export{
    TiendaProvider
}

export default TiendaContext